const users= require ("../utils/users.js");  //me trae [{-},{-},{-}] c c/mail y pasword de c/usuario

module.exports=(req,res)=>{
   const {email, password} = req.query;
   let access= false;                    //como 1er parametro de comparación
   
   users.forEach(user=>{      //tengo q recorrer ese [] p/ver si desde el front el usuario solicitante ya esta registrado
      user.email=== email && user.password=== password 
      ? access= true 
      : null;

    })
    return res.status(200).json({access});   //poner c{} sino solo envia T o F. Asi envia {access:true} como lo pide el ej
}