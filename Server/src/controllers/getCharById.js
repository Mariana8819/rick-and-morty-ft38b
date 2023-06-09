const axios= require("axios");
const { response } = require("express");
const URL= `https://rickandmortyapi.com/api/character/`;

//promesas con Async Await:
// module.exports = async (req, res) =>{}    se puede escribir tbm asi la f para exportarla de una con async await
async function getCharById( req, res){ 
    const {id} = req.params;  
    try{     
       const response = await axios.get( URL+ id);
       const {status, name, species,origin, image,gender}=response.data; 
       const character={id,status,name, species,origin, image,gender}
      console.log (character);
       return character.name 
              ? res.status(200).json(character)          
              : res.status(404).send("Not found")        
   }catch(error){
       return res.status(500).send(error.message);       // 500 = error del servidor
   } 
}

module.exports={getCharById};

////////////////////////////////////////////////////////////////////////////////////
//1ra forma de escribir las promesas :

//// module.exports=(req,res)=>{}  ...asi tbm se escribe la f para exportar la f de una.y le pongo el nombre de la f en el otro lado.

// function getCharById( req, res){   
//     //localhost:3001/rickandmorty/onsearch/1
// const {id} =req.params;     //copiate la prop id de req.params.-Sino va  const id=req.params.id

// axios (URL+id)             // response.data={---}  //hay un get por default =>axios.get(URL+id)
//    .then((response)=>{       
    
//       const {status, name, species,origin, image,gender}=response.data;  //1er desestructuro response.data 
    
//       const character={id,status,name, species,origin, image,gender}     //2do creo el objeto  c las prop q ya desestructure y necesito    
           
//        if(character.name) return res.status(200).json(character)    //si existe ese name del personaje responde c ese personaje
//        else return res.status(404).send("Not found")               //sino responde con status 404 y envia un texto "Not found"
//         //Con ternario:
//         // return character.name 
//         //       ? res.status(200).json(character) 
//         //       : res.status(404).send("Not found")  
//         })
//    .catch(error =>{
//                 return res.status(500).send(error.message);     //sino lo encuentra hago .catch recibe un error(es un obj) y responde c status 500 y envia un msj"xq no funciona"
//             })
//   }

// module.exports={getCharById};

//////////////////////////////////////////////////////////////////////////////
// 2da forma de escribir las promesas 

// const axios= require("axios");

// const getCharById=(res, id)=>{
//   axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//   .then(response => response.data)
//   .then(data=> {
//     const character={
//         id: data.id,
//         name: data.name,
//         gender: data.gender,
//         species: data.species,
//         origin: data.origin,
//         image: data.image,
//         status: data.status
//     };
//     res
//        .writeHead(200, {"Content-Type": "application/json"})
//        .end(JSON.stringify(character));
//   })
//   .catch((error)=> 
//   res
//   .writeHead(500, {"Content-Type": "text/plain"})
//   .end(`Personaje con  ${id}id no encontrado`))
//  // .end({"message": "Este es el mensaje"})
// }

// module.exports= getCharById;
//////////////////////////////////////////////////////////////////////////