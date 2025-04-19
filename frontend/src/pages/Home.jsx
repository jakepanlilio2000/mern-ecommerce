import React from 'react'
import Navbar from '../components/navbar'
import Heading from '../components/ui/heading'
import Carousell from '../components/parts/carousell'

function Home() {
  return (
    <div>
        <Navbar></Navbar>
        <header>
          <Heading variant="special-announcement" text="20% off everything"/>
          <Carousell></Carousell>
        </header>
    </div>
  )
}

export default Home