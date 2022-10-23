const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');

const { PORT = 3000 } = process.env;

const app = express();

mongoose.connect('mongodb://localhost:27017/bitfilmsdb', {
  useNewUrlParser: true,
});

app.use(cookieParser());

app.use(errors()); // обработчик ошибок celebrate

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Application is running on localhost:${PORT}`);
});
