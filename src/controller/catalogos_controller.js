const pool = require('../config/Bd_conexion')


//GUARDAR UNA INFORMACIÓN DE CATOLOGO DE REFERENCIA
const postReferencia = async(req,res)=>{

    const {nombre_referencia} = req.body;

    const response = await pool.query('Insert into cat_referencia (nombre_referencia) values ($1)',[nombre_referencia]);
    console.log(response.rows)
    
    return res.status(200).json({
        status:true,
        message:'Insertado'
    })


}

//CONSULTAR INFORMACIÓN DE CATALOGO DE REFERENCIA
const getReferencia = async(req,res)=>{

    const response = await pool.query('Select * from cat_referencia');

    if(response.rows.length > 0){

        return res.status(200).json({
            status:true,
            reponse:response.rows
        });

   }else{

        return res.status(200).json({
            status:false,
            reponse:'No se encontro inoformación'
        });

   }

}

module.exports ={
    postReferencia,
    getReferencia
}