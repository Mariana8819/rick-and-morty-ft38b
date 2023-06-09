import styles from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import {NavLink} from 'react-router-dom';


export default function NavBar(props) {

   return (
      <div className= {styles.container}>
        <NavLink to="/about">
        <button>About</button>
        </NavLink>
        <NavLink to= "/home">
        <button>Home</button>        
        </NavLink>
        <SearchBar onSearch={props.onSearch} />  
        <NavLink to="/favorites">
         <button>Favorites</button>
        </NavLink>
                
      </div>
   );
}
 // linea 7= le paso la f, la tarjeta al hijo 