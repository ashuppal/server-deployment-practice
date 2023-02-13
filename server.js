'use strict';

const express = require('express');
const app = express();

const logger = require('./middleware/logger.js');
const notFound = require('./handlers/404.js');
const errorHandler = require('./handlers/500.js');

app.use(express.json());

// app.use(logger);


app.get('/', logger,(req, res,next) => {
  res.status(200).send('Hello World!');
});

app.get('/bad', (req, res, next) => {
  next('Error!');
});


app.use('*', notFound);

app.use(errorHandler);

const start = () => {
  app.listen(3001, () => console.log('server running'));
};

module.exports = { start, app };