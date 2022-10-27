const Movie = require('../models/movie');
const STATUS_CODE = require('../errors/statusCode');
const BadRequest = require('../errors/BadRequest');
const Forbidden = require('../errors/Forbidden');
const NotFound = require('../errors/NotFound');

const getUsersMovies = (req, res, next) => {
  Movie.find({ owner: req.user._id })
    .then((movies) => res.send(movies))
    .catch(next);
};

const createMovie = (req, res, next) => {
  Movie.create({ ...req.body, owner: req.user._id })
    .then((movie) => {
      res.send(movie);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequest('Переданы некорректные данные при создании фильма'));
      } else {
        next(err);
      }
    });
};

const deleteMovie = (req, res, next) => {
  Movie.findById(req.params.movieId)
    .orFail(() => {
      throw new NotFound('Фильм не найден');
    })
    .then((movie) => {
      if (movie.owner.toString() !== req.user._id) {
        throw next(new Forbidden('Данный фильм удалить нельзя. Недостаточно прав.'));
      }
      Movie.findByIdAndRemove(req.params.movieId)
        .then(() => res.status(STATUS_CODE.success).send({ message: 'Фмльм удален' }))
        .catch((err) => {
          if (err.name === 'CastError') {
            next(new BadRequest('Переданы некорректные данные для удаления фильма'));
          } else {
            next(err);
          }
        });
    })
    .catch((err) => next(err));
};

module.exports = {
  getUsersMovies, createMovie, deleteMovie,
};
