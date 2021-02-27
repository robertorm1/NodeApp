const express = require('express');
const app = express();

const { getNegocio } = require('../controller/negocio_controller');

app.get('/negocio', getNegocio);


module.exports =app;