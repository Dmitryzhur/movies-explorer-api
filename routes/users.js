const userRouter = require('express').Router();
const { updateUserValidator } = require('../middlewares/validations');
const { getCurrentUser, updateUser } = require('../controllers/users');

userRouter.get('/users/me', getCurrentUser);

userRouter.patch('/users/me', updateUserValidator, updateUser);

module.exports = userRouter;
