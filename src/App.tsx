import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Vision from './components/Vision'
import Technology from './components/Technology'
import Ecosystem from './components/Ecosystem'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Vision />
        <Technology />
        <Ecosystem />
      </main>
      <Footer />
    </div>
  )
}

export default App
