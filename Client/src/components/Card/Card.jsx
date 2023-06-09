import styles from "./Card.module.css";
import {Link} from 'react-router-dom'
import { addFav, removeFav } from "../../redux/actions";
import {connect} from 'react-redux'
import { useState , useEffect} from "react";


// const Card=(props)=> {

// const [isFav, setIsFav]= useState (false);

// useEffect(() => {
//    props.myFavorites.forEach((fav) => {
//       if (fav.id === props.id) {
//          setIsFav(true);
//       }
//    });
// }, [props.myFavorites]);

const Card = ({id, name, status, species, gender, image, origin, onClose, addFav, removeFav, myFavorites}) =>{
   const [isFav, setFav] = useState (false);
   const handleFavorite = () =>{
       isFav ? removeFav(id) 
       :addFav({id, name, status, species, gender, image, origin});
   setFav(!isFav) } 
   useEffect(() => {
       myFavorites.forEach((fav) => {
       if (fav.id === id) { setFav(true); 
      } });
    }, [id, myFavorites]); 



// const handleFavorite=()=>{ 
//   if(isFav){
//    setIsFav(false);
//    props.removeFav(props.id);
//     }else{
//       setIsFav(true);
//       props.addFav(props);
//     }
// }

   return (
      <div className={styles.container}>
         <div className={styles.buttonContainer}>
         {
           isFav ? (
             <button onClick={handleFavorite}>❤️</button>
           ) : (
             <button onClick={handleFavorite}>🤍</button>
           )
         }
         <button onClick={() => onClose(id)}>X</button>
         </div>
         <Link to={`/detail/${id}`} >
         <div className={styles.dataContainer}>            
         <h2>{name}</h2>         
         <h4>{status}</h4>
         <h4>{species}</h4>
         <h4>{gender}</h4>
         <h4>{name.origen}</h4>
         </div>
         <img className={styles.image} src={image} alt={name}/>
         </Link>
      </div>
   );
   }

 const mapDispatchToProps=(dispatch)=>{
      return {
         addFav: (character)=> dispatch(addFav(character)),
         removeFav:(id)=> dispatch(removeFav(id))
      }
   };
const mapStateToProps=(state)=>{
   return {
      myFavorites: state.myFavorites
}
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);

// 

// props= {}
//name: Nombre
//species: Especie
//gender: Género
// image: Imagen
//onClose: La funcion que se va a ejecutar cuando el usuario haga click en el boton de cerrar.
