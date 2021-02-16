import { useState } from 'react'
import './Card.css'
import deceased from './assets/deceased.png'

export default function Card({ name, status, species, origin, image }) {
  const [isShowingDetails, setIsShowingDetails] = useState(false)

  return (
    <section className="Card">
      <h2>Hi! My name is {name}.</h2>
      <div class="Card__img">
        <img src={image} alt="" />
        {status === 'dead' && <img className="dead" src={deceased} alt="" />}
      </div>
      <button
        onClick={event => {
          event.stopPropagation()
          setIsShowingDetails(!isShowingDetails)
        }}
      >
        {isShowingDetails ? 'Hide Details' : 'Show Details'}
      </button>
      {isShowingDetails && (
        <div>
          <h3>
            I am {species === 'Alien' ? 'an ' + species : 'a ' + species} and
            currently{' '}
            {status === 'unknown'
              ? 'it is not known whether I’m alive or dead'
              : status}
            .
          </h3>
          <p>My place of origin is {origin}.</p>
        </div>
      )}
    </section>
  )
}
