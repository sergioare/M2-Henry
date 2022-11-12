import Card from './Card';
import style from "./Cards.module.css"

export default function Cards(props) {
   const { characters, onClose } = props;
   return (
   <div className={style.cards}>
      {characters.map(char =>(
      <Card
         name={char.name}
         gender={char.gender}
         species={char.species}
         image={char.image}
         key={char.id}
         id={char.id}
         // otra manera de hacerlo con destructuring {...char}
         onClose={onClose}
      
      />))}
   </div>
   );
}
