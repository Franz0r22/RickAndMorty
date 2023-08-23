import React from 'react'
import { useState, useEffect } from 'react'
import  getData  from '../Axios/Axios.js'


const App = () => {
  
  const [characters, setCharacters] = useState(null)  

  useEffect(()=> {
    getData(setCharacters)
  }, [])
  
  
    return (
    <>
    {characters != null ? (characters.map(character => (
      <ul key={character.id}>
        <li>{character.name}</li>
      </ul>
    ))) : ('No hay personajes')}
    
    </>
  )
}

export default App


