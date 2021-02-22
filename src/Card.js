import './Card.css'

export default function Card({ id, name, image, handleClick, isTurned }) {
  const backside = 'https://rickandmortyapi.com/api/character/avatar/19.jpeg'

  return (
    <section className="Card" onClick={() => handleClick(id)}>
      <img src={isTurned ? image : backside} alt={isTurned ? name : ''} />
    </section>
  )
}
