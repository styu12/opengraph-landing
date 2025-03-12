import './Footer.css'
import logo from '../assets/logo/logo.png'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-logo">
            <img src={logo} alt="OpenGraph Labs" className="footer-logo-image" />
            <span className="logo-text">OpenGraph<span className="labs">Labs</span></span>
          </div>
          <p className="footer-tagline">
            Building the infrastructure for AI agents in Web3
          </p>
          <div className="footer-social">
            <a href="https://x.com/OpenGraph_Labs" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a href="https://github.com/OpenGraphLabs" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a href="https://discord.gg/opengraph" target="_blank" rel="noopener noreferrer" aria-label="Discord">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 9a5 5 0 0 0-5-5H9a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h4"></path>
                <circle cx="16" cy="15" r="4"></circle>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="footer-links">
          <div className="footer-section">
            <h4>Product</h4>
            <ul>
              <li><a href="#vision">Vision</a></li>
              <li><a href="#technology">Technology</a></li>
              <li><a href="#ecosystem">Ecosystem</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="https://docs.opengraph.io" target="_blank" rel="noopener noreferrer">Documentation</a></li>
              <li><a href="https://github.com/OpenGraphLabs" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Whitepaper</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Community</h4>
            <ul>
              <li><a href="https://x.com/OpenGraph_Labs" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://discord.gg/opengraph" target="_blank" rel="noopener noreferrer">Discord</a></li>
              <li><a href="https://t.me/opengraph" target="_blank" rel="noopener noreferrer">Telegram</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} OpenGraphLabs. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer 