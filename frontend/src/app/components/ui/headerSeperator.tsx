import React from 'react'

interface HeaderSeperatorProps{
  className?: string;
  children: React.ReactNode
}

function HeaderSeperator({className, children}: HeaderSeperatorProps) {
  return (
    <h2 className={`text-2xl uppercase ${className}`}>{children}</h2>
  )
}

export default HeaderSeperator