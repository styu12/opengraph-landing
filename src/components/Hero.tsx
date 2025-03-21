import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-badge">Introducing OpenGraph</span>
        <h1>AI Agents Infrastructure for Web3</h1>
        <p className="subtitle">
          Seamlessly onboard AI Agents and ML models to Sui blockchain with OpenGraph's infrastructure.
          Build the future of decentralized AI in a fully onchain environment.
        </p>
        <p className="hero-description">
          OpenGraph provides the essential infrastructure for deploying and running AI models directly on the Sui blockchain. 
          Our platform enables developers to create truly decentralized AI applications that can operate autonomously 
          within the Web3 ecosystem, leveraging the security and transparency of blockchain technology.
        </p>
        <p className="hero-description">
          With our Walrus on-chain storage layer, we've made it possible to achieve end-to-end fully onchain AI model inference, 
          opening up new possibilities for transparent, verifiable, and trustless artificial intelligence.
        </p>
        <div className="cta-buttons">
          <a href="#technology" className="btn btn-primary">Explore Technology</a>
          <a href="https://github.com/OpenGraphLabs" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Read Docs</a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="orbit">
          <div className="planet"></div>
          <div className="satellite s1"></div>
          <div className="satellite s2"></div>
          <div className="satellite s3"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero 