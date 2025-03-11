import './Vision.css'

const Vision = () => {
  return (
    <section id="vision" className="vision">
      <div className="container">
        <div className="section-header">
          <h2>Our Vision</h2>
          <p className="section-subtitle">
            Creating a bridge between artificial intelligence and Web3
          </p>
        </div>
        
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
            <p>
              The current landscape of AI development is largely centralized, with models running on proprietary 
              infrastructure and lacking transparency. OpenGraph aims to change this paradigm by bringing AI to 
              the blockchain, where operations are transparent, verifiable, and trustless.
            </p>
            <p>
              By enabling AI models to run directly on the Sui blockchain, we're creating a new ecosystem where 
              developers can build applications that leverage both the power of artificial intelligence and the 
              unique properties of blockchain technology. This convergence opens up possibilities for autonomous 
              agents, decentralized governance, and new forms of human-AI collaboration.
            </p>
          </div>
          
          <div className="vision-principles">
            <h3>Core Principles</h3>
            <div className="vision-principle">
              <div className="principle-number">01</div>
              <div className="principle-content">
                <h4>Decentralized AI</h4>
                <p>Enabling AI models to operate in a trustless, permissionless environment where their operations are transparent and verifiable.</p>
              </div>
            </div>
            
            <div className="vision-principle">
              <div className="principle-number">02</div>
              <div className="principle-content">
                <h4>Seamless Integration</h4>
                <p>Bridging the gap between ML models and blockchain infrastructure to make onboarding as simple as possible for AI developers.</p>
              </div>
            </div>
            
            <div className="vision-principle">
              <div className="principle-number">03</div>
              <div className="principle-content">
                <h4>Onchain Intelligence</h4>
                <p>Creating a new paradigm for autonomous agents in Web3 that can interact with smart contracts and decentralized applications.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Vision 