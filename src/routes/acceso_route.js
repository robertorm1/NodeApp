const express = require('express');
const app = express();

const { login } = require('../controller/acceso_controller');


app.post('/login', login);


module.exports =app;