const express = require('express');
const routes = require('../..');

const app = express();

app.use(express.json());
app.use((req, res, next) => {
    // O uso da linha abaixo compromente a segurança da API permitindo o acesso de qualquer dominio a ela
    // contudo é uma solução simples para o momento.
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(routes.buyer);

module.exports = app;