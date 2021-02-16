import data from './assets/rickandmortyapi.json'
import Card from './Card'
import './App.css'

function App() {
  return (
    <div className="App">
      {data.results.map(({ name, status, species, origin, id, image }) => (
        <Card
          key={id}
          name={name}
          status={status.toLowerCase()}
          species={species}
          origin={origin.name}
          image={image}
        />
      ))}
    </div>
  )
}

export default App
