import data from './assets/rickandmortyapi.json'
import Card from './Card'
import './App.css'

function App() {
  const characters = data.results
  const shuffledCharacters = characters
    .sort(() => Math.random() - 0.5)
    .splice(0, 5)
    .flatMap(shuffledCharacter => [shuffledCharacter, shuffledCharacter])
    .sort(() => Math.random() - 0.5)

  return (
    <div className="App">
      {shuffledCharacters.map(({ id, image, name, open }) => (
        <Card key={id} image={image} name={name} />
      ))}
    </div>
  )
}

export default App
