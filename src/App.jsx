import { Suspense, useState } from 'react'
import './App.css'
import DaisyNav from './Components/DaisyNav/DaisyNav'
import Navbar from './Components/NavBar/Navbar'
import PricingOptions from './Components/Pricing Options/PricingOptions'

const pricingPromise = fetch('pricingData.json').then(res => res.json());

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <Navbar></Navbar>
        {/* <DaisyNav></DaisyNav> */}
      </header>
      <main>
        <Suspense fallback={<span className="loading loading-infinity loading-lg"></span>}>
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>
      </main>
    </>
  )
}

export default App
