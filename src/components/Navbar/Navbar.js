import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavBar.module.css";

export default function Navbar (props) {
   return (
      <div className={styles.container}>
        <SearchBar onSearch={(characterID)=>window.alert(characterID)}/>
    </div>
   );
}