import Navbar from '../components/navbar'
import Heading from '../components/ui/heading'
import Carousell from '../components/parts/carousell'

function Home() {
  return (
    <div>
        <Navbar/>
        <header>
          <Heading variant="special-announcement" text="20% off everything"/>
          <Carousell/>
        </header>
    </div>
  )
}

export default Home