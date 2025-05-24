import React from 'react'

function ButtonHelper({className, children}: {className?:string, children: React.ReactNode}) {
  return (
    <button className={className}>{children}</button>
  )
}

export default ButtonHelper