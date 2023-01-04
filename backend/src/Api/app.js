const express = require('express');
const routes = require('../..');

const app = express();

app.use(express.json());

app.use(routes.buyer);

module.exports = app;