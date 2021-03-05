
const pool = require('../config/Bd_conexion');

//INSERTAR UN NUEVO USUARIO
const postAcceso = async(req,res) => {

    const {email,nombre,status}=req.body;
  
    const response = await pool.query('Insert into perfil_usuario (email_usuario,nombre_usuario,estatus_usuario) values($1,$2,$3)',[email,nombre,status]);
    console.log(response.rows);
    
    return res.status(200).json({
        status:true,
        mesage:'Usuario creado'
    });
 
    
 }

 //OBTENER INFORMACION DE USUARIO POR CORREO
 const getUsuario = async(req,res) => {
     
    const email = req.body.email

     const response = await pool.query('Select * from perfil_usuario where email_usuario=$1',[email]);
     return res.status(200).json(response.rows)
 }
 
 module.exports = {
     postAcceso,
     getUsuario
 };