import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>AI Agents Infrastructure for Web3</h1>
        <p className="subtitle">
          Seamlessly onboard AI Agents and ML models to Sui blockchain with OpenGraph's infrastructure.
          Build the future of decentralized AI in a fully onchain environment.
        </p>
        <div className="cta-buttons">
          <a href="#technology" className="btn btn-primary">Explore Technology</a>
          <a href="https://docs.opengraph.io" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Read Docs</a>
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