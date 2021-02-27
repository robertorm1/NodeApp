
const postAcceso = async(req,res) => {

    let idPv=req.body.idPv;
 
     return res.status(200).json({
         status:false,
         mesage:'El pv no tiene fotos agregadas'
       });
 
    
 }
 
 module.exports = {
     postAcceso
 };