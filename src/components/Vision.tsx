import './Vision.css'

const Vision = () => {
  return (
    <section id="vision" className="vision">
      <h2>Our Vision</h2>
      <div className="vision-content">
        <div className="vision-text">
          <p>
            OpenGraph is building the infrastructure layer that enables AI Agents to seamlessly 
            interact with blockchain ecosystems. We're creating a bridge between artificial intelligence 
            and Web3, focusing on the Sui blockchain as our foundation.
          </p>
          <p>
            Our vision is to create a world where AI agents can autonomously operate, learn, and evolve 
            within a fully onchain environment, unlocking new possibilities for decentralized applications 
            and services.
          </p>
        </div>
        <div className="vision-cards">
          <div className="card vision-card">
            <h3>Decentralized AI</h3>
            <p>Enabling AI models to operate in a trustless, permissionless environment</p>
          </div>
          <div className="card vision-card">
            <h3>Seamless Integration</h3>
            <p>Bridging the gap between ML models and blockchain infrastructure</p>
          </div>
          <div className="card vision-card">
            <h3>Onchain Intelligence</h3>
            <p>Creating a new paradigm for autonomous agents in Web3</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Vision 