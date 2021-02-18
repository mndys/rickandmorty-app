import data from './assets/rickandmortyapi.json'
import Card from './Card'
import './App.css'
import { useState } from 'react'

function App() {
  const characters = data.results
  const shuffledCharacters = characters
    .sort(() => Math.random() - 0.5)
    .splice(0, 5)
    .flatMap(shuffledCharacter => [shuffledCharacter, shuffledCharacter])
    .sort(() => Math.random() - 0.5)

  const [cards, setCards] = useState([])
  function storeCard(event) {
    setCards([...cards, event.target])
  }
  return (
    <>
      <div className="App">
        {shuffledCharacters.map(({ id, image, name }) => (
          <Card storeCard={storeCard} image={image} name={name} />
        ))}
      </div>
      {console.log(cards)}
    </>
  )
}

export default App
