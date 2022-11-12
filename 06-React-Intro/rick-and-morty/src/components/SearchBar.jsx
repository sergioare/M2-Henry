import style  from "./SearchBar.module.css";
import { useState } from "react";

export default function SearchBar(props) {
   const [character, setCharacter] = useState("")

   function handleChange(e){
      setCharacter(e.target.value);
   }
   
   return (
      <div className={style.nav}>
         <input type='search'  value={character} onChange={handleChange} />
      <button onClick={() => props.onSearch(character)} className={style.btn}>Agregar</button>
      </div>
   );
}
