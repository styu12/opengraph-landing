import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Vision from './components/Vision'
// import Technology from './components/Technology'
// import Ecosystem from './components/Ecosystem'
import Footer from './components/Footer'

function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="app">
      <div className="gradient-bg" style={{ transform: `translateY(${scrollY * 0.1}px)` }} />
      <Header />
      <main>
        <Hero />
        <Vision />
        {/* <Technology />
        <Ecosystem /> */}
      </main>
      <Footer />
    </div>
  )
}

export default App
