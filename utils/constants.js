const httpRegex = /https?:\/\/(\w{3}\.)?[1-9a-z\-.]{1,}\.\w{2,}(\/[1-90a-z-._~:?#[@!$&'()*+,;=]{1,}\/?)?#?/i;

const {
  PORT = 3000,
  DB_URL_DEV = 'mongodb://localhost:27017/moviesdb',
} = process.env;

module.exports = {
  httpRegex,
  PORT,
  DB_URL_DEV,
};
