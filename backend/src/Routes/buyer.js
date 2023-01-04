const express = require('express');
const buyerController = require('../Controller/buyer');

const route = express.Router();

route.get('/', buyerController.getCardInformations);

module.exports = route;