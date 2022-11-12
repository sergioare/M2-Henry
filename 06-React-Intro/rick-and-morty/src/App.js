import './App.css'
import Cards from './components/Cards.jsx'
import { useState } from 'react'
import Nav from "./components/Nav.jsx"
// import characters from './data.js'
// import SearchBar from './components/SearchBar.jsx'
// import Card from './components/Card.jsx'


function App () {
  const [characters, setCharacters] = useState([]);

	function onSearch(character) {
		fetch(`https://rickandmortyapi.com/api/character/${character}`)
			.then(response => response.json())
			.then(data => {
				if (data.name) {
					setCharacters(oldChars => [...oldChars, data]);
				} else {
					window.alert("No hay personajes con ese ID");
				}
			});
	}

  function onClose(id) {
		setCharacters(oldCharacters =>
			oldCharacters.filter(char => char.id !== id)
		);
	}

  return (
    <div className='App' style={{ padding: '25px' }}>
      <>
      <Nav  onSearch={onSearch}/> 
      
      </>
                 
      <div>
        <Cards 
          onClose={onClose}
          characters={characters}
        />
      </div>
      
    </div>
  )
}

export default App
