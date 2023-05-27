import styles from "./Card.module.css";


export default function Card(props) {
     return (
      <div className={styles.conteiner}>
         <div className={styles.buttonConteiner}>
         <button onClick={props.onClose}>X</button>
         </div>
         <div className={styles.dataConteiner}>
         <h2>{props.name}</h2>
         <h4>{props.status}</h4>
         <h4>{props.species}</h4>
         <h4>{props.gender}</h4>
         <h4>{props.origin}</h4>
         </div>
         <ims src={props.image} alt={props.name}/>
         </div>
   );
   }

// props= {}
//name: Nombre
//species: Especie
//gender: Género
// image: Imagen
//onClose: La funcion que se va a ejecutar cuando el usuario haga click en el boton de cerrar.
