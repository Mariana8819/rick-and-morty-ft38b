import './App.css';
import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/NavBar/NavBar';
import { useState , useEffect} from 'react';
import axios from 'axios';
import{Routes, Route, useLocation} from 'react-router-dom';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import { useNavigate } from 'react-router-dom';
import Favorites from "./components/Favorites/Favorites";


function App() {
// creo un estado 
const [characters, setCharacters]= useState([]);

//..................................................................................................
//copio del readme un personaje xq aun no tengo acceso a la api 
//const example = {
  // id: 1,
  // name: 'Rick Sanchez',
  // status: 'Alive',
  // species: 'Human',
  // gender: 'Male',
  // origin: {
 //     name: 'Earth (C-137)',
 //     url: 'https://rickandmortyapi.com/api/location/1',
 //  },
 //  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
//};
// para agregar personajes creo la f(x) onSearch, es el q recibe el evento ,y con data recibe como obj cada personaje
//const onSearch= (data) =>{
//   setCharacters([...characters, example]);  // me traigo la carpeta completa y le agrego a character mi example
//};
//ahora esa f(X) on searc debo pasarla a mi NavBar

//.........................................................................................................
//aqui reemplazo la f anterior de onSearch por la sig con Axios:

// const onSearch =id=> {     
//   //Evitar duplicados:
//   const characterId = characters.filter (character => 
//    character.id === Number(id));
//     //console.log(characterId);
//     if(characterId.length) return alert (" The character already exists!");
//     if(id <1 || id> 826 ) return alert("There is no character with the entered id!");
    
//     axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
//       if (data.name) {
//          setCharacters((oldChars) => [...oldChars, data]);
//       } else {
//          window.alert('¡No hay personajes con este ID!');
//       }
//    });
// }

//.............................................................................................................
// reemplazo f onSearch con axios anterior con Async Await:

const onSearch = async id=> {     
  try{
      //Evitar duplicados:
      const characterId = characters.filter (character => 
      character.id ===(id));                                
      //console.log(characterId);
      if(characterId.length) return alert (" The character already exists!");
      if(id <1 || id> 826 ) return alert("There is no character with the entered id!");
      const {data} = await axios.get(`http://localhost:3001/rickandmorty/character/${id}`);
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }

  }catch(error){
       console.log(error.message);
  }
}

const onClose = id =>{
   console.log(typeof id);
   console.log(characters[id].id);

setCharacters(characters.filter(char => char.id !== Number(id)))
}

const location= useLocation();
//console.log(location);  muestra un obj:{hash: ,key: ,pathname: "/", search: , state: }

const [access, setAccess] = useState(false);

const navigate = useNavigate();

// f login con Async Await:
async function login(userData) {
   try{
       const { email, password } = userData;
       const URL = 'http://localhost:3001/rickandmorty/login/';
       const { access } = (await axios(URL + `?email=${email}&password=${password}`)).data;
       setAccess(access);
       access && navigate('/home');
  }catch (error){
      console.log(error.message);
   }
}

//......................................................................................................
//const EMAIL = 'mivallejos8819@gmail.com';
//const PASSWORD = '123456';

// function login(userData) {
//    if (userData.password === PASSWORD && userData.email === EMAIL) {
//       setAccess(true);
//       navigate('/home');
//    }
// }
//......................................................................................
//elimino la f login anterior, copio y pego la sig:

// function login(userData) {
//    const { email, password } = userData;
//    const URL = 'http://localhost:3001/rickandmorty/login/';
//    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
//       const { access } = data;
//       setAccess(data);
//       access && navigate('/home');
//    });
// }
//.................................................................................................
useEffect(() => {
   !access && navigate('/');
}, [access, navigate]);
// va a estar mirando esa prop especifica ...si no es lo q espero va a qeudar ahi en el for ("/")

   return (
      <div className='App' style={{padding: "25px"}}>
      {location.pathname !=="/" && <NavBar onSearch={onSearch}/> }
         <hr/>
         <Routes>        
            <Route exact path='/' element={<Form login={login}/>}/>    
            <Route path='/home' element={<Cards characters= {characters} onClose= {onClose}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
         </Routes>
      </div>
   );
}

export default App;


  //en la linea 32= le paso la tarjeta con los codigos al hijo
  //app es el padre de nav, y nav padre de searchbar
  //los eventos van desde los hijos a los padres y la data de los padres a los hijos que son los q finalmente ejecutan
  //linea 138 = si es distinto renderiza NavBar