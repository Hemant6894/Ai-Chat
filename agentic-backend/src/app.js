const express = require('express');
const corsMiddleware = require('./middleware/cors');
const notFound = require('./middleware/notFound');
const routes = require('./routes');

const app = express();

app.use(corsMiddleware);
app.use(express.json());
app.use('/api', routes);
app.use(notFound);

module.exports = app;
