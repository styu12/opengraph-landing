import './Ecosystem.css'

const Ecosystem = () => {
  return (
    <section id="ecosystem" className="ecosystem">
      <div className="container">
        <div className="section-header">
          <h2>Ecosystem</h2>
          <p className="section-subtitle">
            Join the growing ecosystem of AI agents and developers building on OpenGraph
          </p>
        </div>
        
        <div className="ecosystem-content">
          <div className="ecosystem-description">
            <p>
              The OpenGraph ecosystem brings together AI developers, blockchain enthusiasts, and application 
              builders to create a new generation of decentralized AI solutions. Our platform provides the 
              infrastructure and tools needed to build, deploy, and monetize AI models on the Sui blockchain.
            </p>
            
            <p>
              By joining the OpenGraph ecosystem, you become part of a community that's redefining the 
              relationship between artificial intelligence and blockchain technology. Whether you're an 
              AI researcher looking to deploy your models in a decentralized environment or a dApp developer 
              seeking to integrate intelligent capabilities into your application, OpenGraph provides the 
              tools and infrastructure you need.
            </p>
            
            <h3>For AI Developers</h3>
            <p>
              Deploy your AI models and agents directly to the blockchain. Benefit from decentralized 
              infrastructure, transparent operations, and new monetization opportunities.
            </p>
            
            <ul className="ecosystem-features">
              <li>
                <span className="feature-icon">→</span>
                <span>Seamless model deployment with our SDK and CLI tools</span>
              </li>
              <li>
                <span className="feature-icon">→</span>
                <span>Onchain inference capabilities for transparent and verifiable AI</span>
              </li>
              <li>
                <span className="feature-icon">→</span>
                <span>Tokenized AI services that enable new business models</span>
              </li>
              <li>
                <span className="feature-icon">→</span>
                <span>Integration with the broader Sui ecosystem</span>
              </li>
            </ul>
            
            <h3>For Web3 Developers</h3>
            <p>
              Integrate powerful AI capabilities into your decentralized applications. Leverage 
              onchain AI models to enhance your applications with advanced capabilities.
            </p>
            
            <ul className="ecosystem-features">
              <li>
                <span className="feature-icon">→</span>
                <span>Simple API integration with existing dApps</span>
              </li>
              <li>
                <span className="feature-icon">→</span>
                <span>Composable AI components that work with smart contracts</span>
              </li>
              <li>
                <span className="feature-icon">→</span>
                <span>Trustless verification of AI model outputs</span>
              </li>
              <li>
                <span className="feature-icon">→</span>
                <span>Access to a growing marketplace of specialized AI models</span>
              </li>
            </ul>
          </div>
          
          <div className="ecosystem-sidebar">
            <div className="ecosystem-card">
              <h3>Success Stories</h3>
              <div className="success-story">
                <h4>Autonomous Trading Agent</h4>
                <p>
                  A team of researchers deployed a reinforcement learning model for crypto trading 
                  that operates fully onchain, with transparent decision-making and verifiable performance.
                </p>
              </div>
              <div className="success-story">
                <h4>Decentralized Content Moderation</h4>
                <p>
                  A social platform integrated OpenGraph's infrastructure to run content moderation 
                  models onchain, ensuring transparent and fair application of community guidelines.
                </p>
              </div>
            </div>
            
            <div className="ecosystem-cta">
              <h3>Ready to join the ecosystem?</h3>
              <p>Start building with OpenGraph today and be part of the future of decentralized AI.</p>
              <div className="cta-buttons">
                <a href="https://docs.opengraph.io" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Read the Docs</a>
                <a href="https://github.com/opengraph" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Ecosystem 