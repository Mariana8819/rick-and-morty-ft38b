const express = require("express");
const server = express();
const morgan= require("morgan");
const PORT = 3001;
const router= require("./routes/index.js");
//const { getCharById } = require("./controllers/getCharById");

//server.get("/rickandmorty/character/:id", getCharById);   //c/vez q haga esa petición me ejecuta esa f

// con server.use se agrega un middlewar
server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
});
server.use(express.json());
server.use(morgan("dev"));     // p/ver las rutas desde el otro lado

// localhost:3001//rickandmorty/fav
server.use("/rickandmorty", router);  //todo lo q vaya a la url rickandmorty enrutalo(agregale) desde router ,y machea router hasta coincidir con fav q es lo q pide xej y asi ejecuta la f de fav 

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});



// const http = require("http");
// const PORT = 3001;
// const {getCharById}= require ("./controllers/getCharById");


// http.createServer ((req, res) =>{
//     res.setHeader('Access-Control-Allow-Origin', '*');
// // if( req.url.includes("/rickandmorty/character")){
// // console.log(req.url.split("/"));
//     const id=req.url.split("/").pop();
//      //const id=req.url.split("/").[3];
//      //const id=req.url.split("/").at(-1);
//      // console.log(id);
// if(req.url.includes("/rickandmorty/character")){
// getCharById(res, id)

// }

//     const character=characters.filter(char =>char.id===Number(id));
//         res
//         .writeHead(200, {"content-type": "application-json"})
//         .end(JSON.stringify(character[0]));
    
//   }
// )
// .listen(PORT, "localhost");