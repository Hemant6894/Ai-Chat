require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,
  clientOrigin: process.env.CLIENT_ORIGIN || 'http://localhost:4200',
};
