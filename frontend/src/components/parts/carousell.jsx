import React from 'react'

function carousell(imagePaths) {
    
  return (
    <div>
        {imagePaths.map((path, index) => {
            return <img src={path} key={index} alt="carousell picture" />
        })} 
    </div>
  )
}

export default carousell