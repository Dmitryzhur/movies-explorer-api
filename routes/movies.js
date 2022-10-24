const movieRouter = require('express').Router();
const { createMovieValidator, deleteMovieValidator } = require('../middlewares/validations');
const { getMovie, createMovie, deleteMovie } = require('../controllers/movies');

movieRouter.get('/movies', getMovie);

movieRouter.post('/movies', createMovieValidator, createMovie);

movieRouter.delete('/movies/:movieId', deleteMovieValidator, deleteMovie);

module.exports = movieRouter;
