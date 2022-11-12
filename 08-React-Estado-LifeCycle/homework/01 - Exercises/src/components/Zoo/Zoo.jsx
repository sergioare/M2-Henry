import React from 'react';
// eslint-disable-next-line no-unused-vars
import Animals from '../Animals/Animals';
// eslint-disable-next-line no-unused-vars
import Species from '../Species/Species';
import './Zoo.module.css';

export default function Zoo(props) {
   /* Escribe acá tu código */
   const [zoo, setZoo] = React.useState({
      zooName: "",
      animals: [],
      species: [],
      allAnimals: [],
   });


   function handleInputChange(e){
      setZoo({ 
         ...zoo,
         zooName: e.target.value,
         })
      //target es el elemento del DOM donde ocurrio ese evento. 
   };
   // const handleInputChange = (e) =>{
   //    setZoo({
   //       zooName: e.target.value,
   //       ...e,
   //    });
   // }

   
   return (
      <div>
         <label  htmlFor="">Zoo Name:</label>
         <input  type="text" name="" id="" value={zoo.zooName} onChange={handleInputChange}/>
         <h1>{zoo.zooName}</h1>
      </div>
   );

   
}
