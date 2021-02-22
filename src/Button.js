import './Button.css'
export default function Button({ text, handleClick }) {
  return (
    <button className="Button" onClick={event => handleClick(event)}>
      {text}
    </button>
  )
}
