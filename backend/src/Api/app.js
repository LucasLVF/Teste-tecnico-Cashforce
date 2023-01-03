const express = require('express');
const routes = require('../routes');

const app = express();

app.use(express.json());

/* app.use(routes.user);
app.use(routes.seller);
app.use('/customer', routes.customer);
app.use(routes.products);
app.use(routes.customerOrders);
app.use('/admin', routes.admin);

app.get('/coffee', (_req, res) => res.status(418).end()); */

module.exports = app;