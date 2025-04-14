import React from 'react'

interface BuyCardProps{
  id: number,
  title: string,
  origPrice: number,
  stars: number,
  discount: number //must be a float
}


function BuyCard({id, title, origPrice, stars, discount }: BuyCardProps) {
  const generateStar = (number: number) => {
    
  }
  // must recieve id as number, title as string, origPrice as number, stars as number, discount as float
  // why we not using ts?
  const sellingPrice = origPrice * discount

  return (
    <div>
      {title}
      {sellingPrice}
      
    </div>
  )
}

export default BuyCard