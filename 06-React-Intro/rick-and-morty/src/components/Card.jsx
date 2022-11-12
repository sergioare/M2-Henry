import style from "./Card.module.css"

export default function Card(props) {
   return (
      <div className={style.card}>
         
         <button onClick={() => props.onClose(props.id)} className={style.btn}><span>Eliminar</span></button>
         <div className={style.cardLeft}>
         <dl className={style.descriptionAll}>
                  <h2 className={style.name}>{props.name}</h2>
               <dt><strong>Specie:</strong></dt>
                  <dd><h2 className={style.description}>{props.species}</h2></dd>
               <dt><strong>Gender:</strong></dt>
                  <dd><h2 className={style.description}>{props.gender}</h2></dd>
         </dl>
         </div>
         <div className={style.cardRight}>
         <img  src={props.image} alt="Alguna imagen de Rick and Morty" className={style.img}/>
         </div>
      </div>
   );
}
