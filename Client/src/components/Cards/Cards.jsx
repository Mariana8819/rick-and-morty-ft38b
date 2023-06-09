import Card from '../Card/Card.jsx';

export default function Cards(props) {
   //props={characters: [{...},{...},{...}]}
  const {characters}= props;
  // characters= [{...}, {...},{...}] va ser {}cada personaje
   return (
   <div style={{display:"flex", justifyContent: "space-between"}}>
      {characters.map(character=>(
         <Card
         key={character.id}
         id={character.id}
         name={character.name}
         status={character.status} 
         species={character.species}
         gender={character.gender}
         origen={character.name.origen}
         image={character.image}
         onClose={ () => props.onClose (character.id)}
         />
      ))}
   </div>
   );
}

//linea 18= le paso el onClose de App.js