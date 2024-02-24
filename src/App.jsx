import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Cards from './components/Cards'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <div className='w-full h-screen'>
      <Navbar />
      <LandingPage />
      <Cards />
      <About />
      <Footer />
    </div>
  )
}

export default App
