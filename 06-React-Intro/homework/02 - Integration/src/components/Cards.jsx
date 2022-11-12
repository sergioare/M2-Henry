import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   return <div>
      {characters.map(char =>(
      <Card
         name={char.name}
         gender={char.gender}
         species={char.species}
         image={char.image}
         // otra manera de hacerlo con destructuring {...char}
         onClose={() => window.alert('Emulamos que se cierra la card')}
      
      />))}
   </div>;
}
