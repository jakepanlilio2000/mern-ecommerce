import React from 'react'
import Button from './ui/button'


// to be modified
// situational either profile circle or grp buttons
function AuthButtons() {
  return (
    <div>
        <Button mode="normal" isRounded={true}>Login</Button>
        <Button mode="inverted" isRounded={true}>Register</Button>
    </div>
  )
}

export default AuthButtons