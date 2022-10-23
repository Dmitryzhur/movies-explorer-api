const mongoose = require('mongoose');
const validator = require('validator');
const isURL = require('validator/lib/isURL');

const movieSchema = new mongoose.Schema({
  country: { // страна создания фильма. Обязательное поле-строка.
	type: String,
    required: true,
  },
  director: { // режиссёр фильма. Обязательное поле-строка.
	type: String,
    required: true,
  },
  duration: { // длительность фильма. Обязательное поле-число.
	type: Number,
    required: true,
  },
  year: { // год выпуска фильма. Обязательное поле-строка.
	type: String,
    required: true,
  },
  description: { // описание фильма. Обязательное поле-строка.
	type: String,
    required: true,
  },
  image: { // ссылка на постер к фильму. Обязательное поле-строка. Запишите её URL-адресом.
	type: String,
    required: true,
	validate: {
		validator: (url) => isURL(url),
		message: 'Некорректный URL',
	  },
  },
  trailerLink: { // ссылка на трейлер фильма. Обязательное поле-строка. Запишите её URL-адресом.
	type: String,
    required: true,
	validate: {
		validator: (url) => isURL(url),
		message: 'Некорректный URL',
	  },
  },
  thumbnail: { // миниатюрное изображение постера к фильму. Обязательное поле-строка. Запишите её URL-адресом.
	type: String,
    required: true,
	validate: {
		validator: (url) => isURL(url),
		message: 'Некорректный URL',
	  },
  },
  owner: { // _id пользователя, который сохранил фильм. Обязательное поле.
	type: String,
    required: true,
  },
  movieId: { // id фильма, который содержится в ответе сервиса MoviesExplorer. Обязательное поле.
	type: Number,
    required: true,
  },
  nameRU: { // название фильма на русском языке. Обязательное поле-строка.
	type: String,
    required: true,
  },
  nameEN: { // название фильма на английском языке. Обязательное поле-строка
	type: String,
    required: true,
  },
});

module.exports = mongoose.model('movie', movieSchema);
