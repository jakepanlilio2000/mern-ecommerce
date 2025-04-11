import React from 'react'


function BuyCard({id, title, origPrice, stars, discount }) {
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