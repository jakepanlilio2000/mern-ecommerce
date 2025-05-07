import React from 'react'

interface HeaderSeperatorProps{
  className?: string;
  children: React.ReactNode
  withHr: boolean
}

function HeaderSeperator({className, children,withHr}: HeaderSeperatorProps) {
  return (
    <h2 className={`text-2xl ${className}`}>{children}</h2>
  )
}

export default HeaderSeperator