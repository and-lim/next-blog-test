import Link from "next/link"

const Button = ({ text }) => {
  return (
    <Link href="/">
    <button className="button" onClick={(event) => (event.target.innerText += '🔥')}>
      {text}
    </button>
    </Link>
  )
}

export default Button
