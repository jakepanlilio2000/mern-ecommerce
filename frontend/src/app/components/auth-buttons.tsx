import React from 'react'
import Button from './ui/button'

function AuthButtons() {
  return (
    <div>
        <Button mode="normal" isRounded={true}>Login</Button>
        <Button mode="inverted" isRounded={true}>Register</Button>
    </div>
  )
}

export default AuthButtons