const express = require('express');
const app = express();

const { postAcceso,getUsuario } = require('../controller/acceso_controller');


app.post('/insertUser',postAcceso);
app.post('/getUser',getUsuario);


module.exports = app;