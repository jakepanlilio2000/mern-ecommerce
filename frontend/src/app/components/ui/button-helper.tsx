import React from 'react'

function ButtonHelper({children}: {children: React.ReactNode}) {
  return (
    <button>{children}</button>
  )
}

export default ButtonHelper