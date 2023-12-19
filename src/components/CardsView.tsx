import { useState } from "react"
import type { CardItem } from "../types/types"
import "./CardsView.css"

interface CardsViewProps {
  cards: CardItem[]
}

export default function CardsView({ cards }: CardsViewProps) {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>Click me {count}</button>
      <div className='cardsView'>
        {cards.map((card, index) => {
          return index < 3 ? <CardView key={index} {...card}></CardView> : null
        })}
      </div>
    </div>
  )
}

function CardView({ title, description, image }: CardItem) {
  return (
    <div className='card'>
      <div className='image' style={{ backgroundImage: `url(${image})` }}>
        <img src='/assets/game-info-frame-a.webp' alt='' />
      </div>
      <div className='title'>{title}</div>
      <div className='description'>{description}</div>
    </div>
  )
}
