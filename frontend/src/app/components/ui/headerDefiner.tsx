import React, { ReactNode } from 'react'

interface HeaderDefinerProps {
  className?: string;
  children: React.ReactNode
}

function HeaderDefiner({className, children}: HeaderDefinerProps) {
  return (
    <h3 className={`text-2xl ${className}`}>{children}</h3>
  )
}

export default HeaderDefiner