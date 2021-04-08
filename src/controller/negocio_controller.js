const pool = require('../config/Bd_conexion');

//GUARDAR INFORMACIÓN DE NEGOCIO
const postNegocio = async(req,res) =>{

    const {nombre,direccion,local,foto,latitud,longitud,fk_referencia,fk_usuario}=req.body;
  
    const response = await pool.query('Insert into datos_negocio(nombre_dueño,direccion_negocio,nombre_local,url_foto,latitud,longitud,fk_referencia,fk_usuario) values($1,$2,$3,$4,$5,$6,$7,$8)',[nombre,direccion,local,foto,latitud,longitud,fk_referencia,fk_usuario]);
    console.log(response.rows);
    
    return res.status(200).json({
        status:true,
        mesage:'Insertado'
    });
 

}

//ACTUALIZAR INFORMACIÓN DE NEGOCIO
const updateNegocio = async(req,res) => {
    const {id_negocio,nombre,direccion,local,foto,fk_referencia}=req.body;

    const response = await pool.query('Update datos_negocio set nombre_dueño=$2,direccion_negocio=$3,nombre_local=$4,url_foto=$5,fk_referencia=$6) where id_negocio=$1',[id_negocio,nombre,direccion,local,foto,fk_referencia]);
    console.log(response.rows);
    
    return res.status(200).json({
        status:true,
        mesage:'Actualizado'
    });
}

//CONSULTAR INFORMACIÓN DE NEGOCIO
const getNegocio = async(req,res) => {

    const response = await pool.query('Select * from datos_negocio');

    if(response.rows.length > 0){
    
        return res.status(200).json({
            status:true,
            response:response.rows
        });

   }else{

    return res.status(200).json({
        status:false,
        response:'No se encontro inoformación'
    });

   }

 }
 
 module.exports = {
     getNegocio,
     postNegocio,
     updateNegocio
 };