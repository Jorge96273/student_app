import { useState } from 'react';
import {Outlet} from 'react-router-dom'
import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';



function App() {
  const [favorites, setFavorites] = useState([])

  const addFavorite = (char) => {
    setFavorites([...favorites, char])}
  

  const removeFavorite = (id) => {
    updatedFavorites = favorites.filter((char) => {
      if (char.id === id) {
        return false
      }
      return true
    })
    setFavorites(updatedFavorites)
  }

  const checkIsFavorite = (characterObj) => {
    const idArr = favorites.map((char) => char.id)
    return idArr.includes(characterObj.id) ? <Button variant="primary" onClick={() => removeFavorite(characterObj)}>Remove from Favorites</Button> : <Button variant="primary" onClick={() => addFavorite(characterObj)}>Add to Favorites</Button>
  }

  

  const contextObj = {
    favorites,
    addFavorite,
    removeFavorite,
    checkIsFavorite
  }

  return (
    <>
      <NavBar />
      <Outlet context ={contextObj}/>
    </>
  )
}

export default App;