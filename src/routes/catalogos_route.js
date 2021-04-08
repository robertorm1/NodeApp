const express = require('express');
const app = express();

const {postReferencia,getReferencia} = require('../controller/catalogos_controller')

app.post('/postReferencia',postReferencia);
app.get('/getReferencia',getReferencia);


module.exports = app;