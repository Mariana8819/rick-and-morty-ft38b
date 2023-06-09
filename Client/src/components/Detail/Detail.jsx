import { useState , useEffect} from "react";
import { useParams} from 'react-router-dom';
import axios from "axios";


export default function Detail(props){
    //console.log(useParams());
    const {id }=useParams();
    //useParams()= {id:n, nombre:..,gender:...}
    // detail/:id/:nombre/:gender
    // console.log("id en Detail: ", useParams());
    const [character, setCharacter] =useState({});

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
// console.log("character desde Detail:", character);
    return (
        <div style={{backgroundColor: "lightgray"}}>
            <h1>DETAIL</h1>
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name}/>
            <h3>{character.status}</h3>
            <h3>{character.species}</h3>
            <h3>{character.gender}</h3>
            <h3>{character.origen.name}</h3>           
        </div>
    )
}