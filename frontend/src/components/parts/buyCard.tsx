import React from 'react'
import Stars from '../ui/starts'

interface BuyCardProps{
  id: number,
  title: string,
  origPrice: number,
  stars: number,
  discount: number //must be a float
}


function BuyCard({id, title, origPrice, stars, discount }: BuyCardProps) {
  
  const sellingPrice = origPrice * discount

  return (
    <div>
      {title}
      {sellingPrice}
      <Stars stars={stars}></Stars>
    </div>
  )
}

export default BuyCard