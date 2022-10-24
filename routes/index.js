const routes = require('express').Router();
const userRouter = require('./users');
const movieRouter = require('./movies');
const { login, createUser } = require('../controllers/users');
const { auth } = require('../middlewares/auth');
const { userBodyValidator, authValidator } = require('../middlewares/validations');
const NotFound = require('../errors/NotFound');

routes.post('/signup', userBodyValidator, createUser);
routes.post('/signin', authValidator, login);

routes.use(auth);
routes.use('/', userRouter);
routes.use('/', movieRouter);
routes.get('/logout', (req, res) => {
  res.clearCookie('access_token').send({ message: 'Выход' });
});
routes.use('*', (req, res, next) => {
  next(new NotFound('Страница не найдена'));
});

module.exports = routes;
