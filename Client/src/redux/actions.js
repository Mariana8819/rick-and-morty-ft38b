//import {ADD_FAV, FILTER, ORDER, REMOVE_FAV} from "./types"; despues averiguar en el video Zoom Webinar 2023-05-24 12-59-58
import axios from "axios";
const ENDPOINT = 'http://localhost:3001/rickandmorty/fav';

//...................................................................................................
// export const addFav=(character)=>{
//     return{ 
//         type: "ADD_FAV",
//         payload:character,
//     }
// };
// export const removeFav=(id)=>{
//     return{
//         type: "REMOVE_FAV",
//         payload: id,
//     }
// };
//........................................................................................................
//a partir de m03/ej 05 reemplazo la f ADD:FAV y REMOVE_FAV copy past
// export const addFav = (character) => {
//     const endpoint = 'http://localhost:3001/rickandmorty/fav';
//     return (dispatch) => {
//        axios.post(endpoint, character).then(({ data }) => {
//           return dispatch({
//              type: 'ADD_FAV',
//              payload: data,
//           });
//        });
//     };
//  };

//  export const removeFav = (id) => {
//     const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
//     return (dispatch) => {
//        axios.delete(endpoint).then(({ data }) => {
//           return dispatch({
//              type: 'REMOVE_FAV',
//              payload: data,
//        });
//        });
//     };
//  };

//..........................................................................................................
// con Async Await (a partir de m03/ej 06 convierto las f ADD:FAV y REMOVE_FAV con Async Await)

export const addFav = (character) => {    // no se debe convertir en este caso async await pero si retornarla a async await
   return async (dispatch) =>{
      try{
         const {data} = await axios.post (ENDPOINT, character);
         return dispatch ({
            type: "ADD_FAV",
            payload: data,
         })
      }catch (error){
         return dispatch({
            type: "ERROR",
            payload: error.message
         })
         
      }
   }
}

export const removeFav = (id) => {
   return async (dispatch)=>{
      try{
         const {data} = await axios.delete(`${ENDPOINT}/ ${id}`)
         return dispatch({
            type: 'REMOVE_FAV',
            payload: data,
         });
      }catch (error){
         return dispatch({
            type: "ERROR",
            payload: error.message
         });
      }
   }
}
  
export const filterCards =(gender)=>{
    return{
        type: "FILTER",
        payload: gender
    }
    };
export const orderCards=(orden)=>{
    return{
        type: "ORDER",
        payload: orden
    }
}