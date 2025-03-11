import { useState, useEffect } from 'react'
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <a href="/">
            <span className="logo-text">OpenGraph<span className="labs">Labs</span></span>
          </a>
        </div>

        <div className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#vision" onClick={closeMenu}>Vision</a></li>
            <li><a href="#technology" onClick={closeMenu}>Technology</a></li>
            <li><a href="#ecosystem" onClick={closeMenu}>Ecosystem</a></li>
            <li><a href="https://github.com/OpenGraphLabs" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>GitHub</a></li>
            <li><a href="https://x.com/OpenGraph_Labs" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Twitter</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header 