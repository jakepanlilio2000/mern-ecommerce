import React from 'react'

interface StarsProps{
    stars: number;
}

function Stars({ stars }: StarsProps) {
    const chooseStarFormat = () => {
      return Array.from({ length: 5 }, (_, i) => {
        const starValue = i + 1
        if (stars >= starValue) {
          return <span key={i}>★</span> // full star
        } else if (stars >= starValue - 0.5) {
          return <span key={i}>☆</span> // half star (placeholder, replace with actual half star if you want)
        } else {
          return <span key={i}>✩</span> // empty star
        }
      })
    }
  
    return (
      <div>
        {chooseStarFormat()}
      </div>
    )
  }

export default Stars