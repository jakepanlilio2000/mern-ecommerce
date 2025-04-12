import React from 'react'
import Navbar from '../components/navbar'
import Heading from '../components/ui/heading'

function Home() {
  return (
    <div>
        <Navbar></Navbar>
        <header>
          <Heading variant="special-announcement" text="20% off everything"/>
          
        </header>
    </div>
  )
}

export default Home