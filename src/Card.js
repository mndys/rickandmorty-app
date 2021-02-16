import { useState } from 'react'
import './Card.css'

export default function Card({ name, status, species, origin, image }) {
  const [isShowingDetails, setIsShowingDetails] = useState(false)

  return (
    <section className="Card">
      <h2>Hi! My name is {name}.</h2>
      <img src={image} alt="" />
      <button
        onClick={event => {
          event.stopPropagation()
          setIsShowingDetails(!isShowingDetails)
        }}
      >
        {isShowingDetails ? 'Hide Details' : 'Show Details'}
      </button>
      <div hidden={!isShowingDetails}>
        <h3>
          I am a {species} and currently {status}.
        </h3>
        <p>My place of origin is {origin}.</p>
      </div>
    </section>
  )
}
