
require('./config/config');

const express = require('express');
const { use } = require('./routes/negocio_route');
const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.use(require('./routes/acceso_route'));
app.use(require('./routes/negocio_route'));
app.use(require('./routes/catalogos_route'));


app.listen(process.env.PORT,() =>{
    console.log('Server Port',process.env.PORT);
});