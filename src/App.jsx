import { Suspense, useState } from 'react'
import './App.css'
import DaisyNav from './Components/DaisyNav/DaisyNav'
import Navbar from './Components/NavBar/Navbar'
import PricingOptions from './Components/Pricing Options/PricingOptions'
import ResultsChart from './Components/Result Cart/ResultsChart'
import axios from 'axios'
import MarkChats from './Components/Marks Chart/MarkChats'

const pricingPromise = fetch('pricingData.json').then(res => res.json());
const marksPromise = axios.get('marksData.json')

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

        <ResultsChart></ResultsChart>

        <Suspense fallback={<span className="loading loading-infinity loading-lg"></span>}> 
          <MarkChats marksPromise={marksPromise}></MarkChats>
        </Suspense>

      </main>
    </>
  )
}

export default App
