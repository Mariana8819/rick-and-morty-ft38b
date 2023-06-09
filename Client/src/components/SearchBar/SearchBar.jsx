import { useState } from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar(props) {
   //una f q vaya capturando los datos,antes de modificar el estado creo un nuevo estado
   const [id, setId] = useState(""); // ("") es el estado inicial
   //handleChange recibe el evento del input
   const handleChange = e =>{   //recibe el evento del input
      const {value} =e.target;
      //console.log(e);
      setId(value); // hace que el usuairo pise el valor de useState(""), modificando / actualizando mi estado
      console.log("id: ", id);  
   }

      return (
      <div className= {styles.container}>
         <input 
         type='text'
         name='search' 
         id='search'
         onChange={handleChange}
          />
         <button onClick = {()=> props.onSearch(id)}
         >Agregar</button>      
          </div>
   );
}
//linea 24= para ejecutarlo cada vez q haga un click lo convierto en un cb.(()=>f()) y se ejecuta esa f con parametro character c/cada