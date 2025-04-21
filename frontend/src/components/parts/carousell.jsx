import React from 'react'

function Carousell(imagePaths) {
    
  return (
    <div className="">
        {imagePaths.map((path, index) => {
            return <img src={path} key={index} alt="carousell picture" />
        })} 
    </div>
  )
}

export default Carousell