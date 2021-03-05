const pool = require('../config/Bd_conexion');

const getNegocio = async(req,res) => {

    res.send('hello world');
    
 }
 
 module.exports = {
     getNegocio
 };