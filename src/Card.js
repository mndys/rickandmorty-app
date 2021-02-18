import { useState } from 'react'
import './Card.css'

export default function Card({ id, name, image }) {
  const backside = 'https://rickandmortyapi.com/api/character/avatar/19.jpeg'
  const [isHidingCard, setIsHidingCard] = useState(backside)
  const cardStorage = []

  function handleClick(event) {
    turnCard(event)
    storeCard(event)
  }

  function storeCard(event) {
    cardStorage.push(event.target)
    console.log(cardStorage)
  }

  function turnCard(event) {
    isHidingCard !== backside
      ? setIsHidingCard((event.target.src = backside))
      : setIsHidingCard((event.target.src = image))
  }

  return (
    <section className="Card">
      <img
        src={backside}
        alt={isHidingCard === image ? name : ''}
        onClick={handleClick}
        open={isHidingCard === image}
      />
    </section>
  )
}
