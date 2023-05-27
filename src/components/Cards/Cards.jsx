import Card from '../Card/Card.jsx';

export default function Cards(props) {
   // props={ characters:[{..}, {...}.{...}]}
   const {characters}= props;
   //characters= [{..},{..},{..}]

   return (
      <div style={{display: 'flex', justifyContent:"space-between"}}>
         {characters.map(character=>(
            <Card
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin}
            image={character.imagen}
            />
         ))}
      </div>
   );
   }
  // characters= [{...}, {...},{...}] va ser {}cada personaje
  
   