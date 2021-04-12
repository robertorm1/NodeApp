const express = require('express');
const app = express();

const { getNegocio,postNegocio,updateNegocio } = require('../controller/negocio_controller');

app.get('/getNegocio', getNegocio);
app.post('/postNegocio',postNegocio);
app.post('/updateNegocio',updateNegocio);


module.exports =app;