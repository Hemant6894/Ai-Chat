const cors = require('cors');
const { clientOrigin } = require('../config');

module.exports = cors({
  origin: clientOrigin,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
});
