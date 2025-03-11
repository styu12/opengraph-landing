import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <span className="logo-text">OpenGraph</span>
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
              <li><a href="https://github.com/opengraph" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Whitepaper</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Community</h4>
            <ul>
              <li><a href="https://twitter.com/opengraph" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://discord.gg/opengraph" target="_blank" rel="noopener noreferrer">Discord</a></li>
              <li><a href="https://t.me/opengraph" target="_blank" rel="noopener noreferrer">Telegram</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} OpenGraph. All rights reserved.</p>
        <div className="footer-social">
          <a href="https://twitter.com/opengraph" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 4.01C21 4.5 20.02 4.69 19 5C18.39 4.41 17.59 4.04 16.71 3.97C15.83 3.9 14.95 4.15 14.22 4.66C13.49 5.17 12.95 5.93 12.68 6.8C12.4 7.67 12.41 8.62 12.71 9.48C10.72 9.38 8.78 8.8 7.03 7.77C5.27 6.74 3.75 5.29 2.59 3.55C2.19 4.25 1.99 5.05 1.99 5.86C1.99 6.6 2.19 7.32 2.56 7.96C2.93 8.6 3.45 9.13 4.09 9.5C3.28 9.47 2.49 9.25 1.79 8.86V8.91C1.79 9.91 2.13 10.88 2.74 11.67C3.36 12.46 4.22 13.02 5.19 13.25C4.44 13.45 3.65 13.47 2.89 13.31C3.15 14.17 3.68 14.92 4.41 15.47C5.13 16.01 6.01 16.31 6.92 16.32C5.36 17.57 3.43 18.25 1.44 18.25C1.07 18.25 0.7 18.23 0.33 18.19C2.35 19.5 4.7 20.21 7.11 20.2C15.04 20.2 19.37 13.67 19.37 8.02C19.37 7.82 19.37 7.62 19.36 7.42C20.36 6.66 21.22 5.7 21.89 4.61L22 4.01Z" fill="currentColor"/>
            </svg>
          </a>
          <a href="https://github.com/opengraph" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21C9.5 20.77 9.5 20.14 9.5 19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26C14.5 19.6 14.5 20.68 14.5 21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 6.48 17.52 2 12 2Z" fill="currentColor"/>
            </svg>
          </a>
          <a href="https://discord.gg/opengraph" target="_blank" rel="noopener noreferrer" aria-label="Discord">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4C14.89 4.21 14.76 4.48 14.67 4.69C13.06 4.46 11.46 4.46 9.85 4.69C9.76 4.48 9.62 4.21 9.51 4C8.01 4.26 6.57 4.71 5.23 5.33C3.28 8.24 2.71 11.06 3 13.83C4.72 15.1 6.4 15.9 8.05 16.42C8.38 15.97 8.68 15.5 8.94 15C8.39 14.8 7.87 14.55 7.38 14.25C7.47 14.18 7.56 14.11 7.65 14.04C10.94 15.58 14.62 15.58 17.88 14.04C17.97 14.11 18.06 14.18 18.15 14.25C17.66 14.55 17.13 14.8 16.59 15C16.85 15.5 17.14 15.97 17.48 16.42C19.13 15.9 20.82 15.1 22.53 13.83C22.87 10.57 21.96 7.78 19.27 5.33ZM8.57 12.2C7.61 12.2 6.82 11.32 6.82 10.26C6.82 9.2 7.59 8.32 8.57 8.32C9.56 8.32 10.33 9.2 10.32 10.26C10.32 11.32 9.55 12.2 8.57 12.2ZM15.45 12.2C14.5 12.2 13.7 11.32 13.7 10.26C13.7 9.2 14.48 8.32 15.45 8.32C16.44 8.32 17.22 9.2 17.21 10.26C17.21 11.32 16.44 12.2 15.45 12.2Z" fill="currentColor"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer 