import data from './assets/rickandmortyapi.json'
import Card from './Card'
import './App.css'
import { useEffect, useMemo, useState } from 'react'
import Button from './Button'

function App() {
  const characters = data.results

  const shuffledCharacters = useMemo(() => shuffle(characters), [characters])

  function shuffle(characters) {
    return characters
      .sort(() => Math.random() - 0.5)
      .splice(0, 5)
      .flatMap(shuffledCharacter => [
        shuffledCharacter,
        { ...shuffledCharacter, id: shuffledCharacter.id + 'copy' },
      ])
      .sort(() => Math.random() - 0.5)
  }

  const [cards, setCards] = useState([])
  const [pairs, setPairs] = useState([])

  function handleClick(id) {
    if (!cards.includes(id)) {
      if (
        cards.includes(
          parseInt(typeof id === 'string' && id.slice(0, id.length - 4))
        ) ||
        cards.includes(id + 'copy')
      ) {
        if (!pairs.includes(id) || !cards.includes(id)) {
          setPairs([...pairs, ...cards, id])
        }
        setCards([])
      } else {
        setCards([...cards, id])
      }
    }
    return
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      cards.length >= 2 && setCards([])
    }, 500)
    return () => clearTimeout(timer)
  }, [cards])

  /* useEffect(() => {
    pairs.length === shuffledCharacters.length &&
      alert('🎉 YOU 🍾 WON 🥂 !!! 🥳')
  }, [pairs, shuffledCharacters]) */

  function resetGame() {
    window.location.reload()
  }

  return (
    <>
      <div className="App">
        {shuffledCharacters.map(({ id, image, name }) => (
          <Card
            key={id}
            id={id}
            image={image}
            name={name}
            handleClick={handleClick}
            isTurned={cards.includes(id) || pairs.includes(id)}
          />
        ))}
      </div>
      {pairs.length === shuffledCharacters.length && (
        <div className="App">
          <Button
            text="🎉 YOU 🍾 WON 🥂 !!! 🥳
        Play again?"
            handleClick={resetGame}
          />
        </div>
      )}
    </>
  )
}

export default App
