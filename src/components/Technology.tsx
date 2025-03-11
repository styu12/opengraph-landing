import './Technology.css'

const Technology = () => {
  return (
    <section id="technology" className="technology">
      <div className="container">
        <div className="section-header">
          <h2>Our Technology</h2>
          <p className="section-subtitle">
            End-to-end fully onchain AI model inference powered by Sui blockchain
          </p>
        </div>
        
        <div className="tech-content">
          <div className="tech-description">
            <p>
              OpenGraph's technology stack enables seamless integration of AI models with the 
              Sui blockchain. Our infrastructure allows for fully onchain AI model inference, 
              creating a new paradigm for transparent and verifiable artificial intelligence.
            </p>
            
            <p>
              At the core of our technology is the integration with Sui, a high-performance Layer 1 
              blockchain that provides the security and scalability needed for AI operations. 
              Combined with our Walrus storage layer, we've created a comprehensive solution for 
              deploying AI models in a decentralized environment.
            </p>
            
            <p>
              The OpenGraph platform handles the complexities of blockchain integration, allowing 
              AI developers to focus on their models rather than infrastructure. Our SDK provides 
              simple APIs for deploying models, managing data, and executing inference operations.
            </p>
            
            <h3>Key Components</h3>
            
            <div className="tech-component">
              <h4>Walrus Storage Layer</h4>
              <p>
                Our proprietary on-chain storage solution optimized for AI model weights and 
                parameters. Walrus enables efficient storage and retrieval of large ML models 
                directly from the blockchain.
              </p>
            </div>
            
            <div className="tech-component">
              <h4>Inference Engine</h4>
              <p>
                A high-performance execution environment that runs AI models directly on the 
                blockchain. The engine supports various model architectures and ensures 
                deterministic execution across the network.
              </p>
            </div>
            
            <div className="tech-component">
              <h4>Developer SDK</h4>
              <p>
                A comprehensive toolkit that simplifies the process of deploying and 
                interacting with AI models on the blockchain. The SDK handles the 
                complexities of blockchain integration.
              </p>
            </div>
          </div>
          
          <div className="tech-sidebar">
            <div className="tech-diagram">
              <div className="diagram-container">
                <h3>Architecture Overview</h3>
                <div className="diagram-box">
                  <div className="diagram-layer top-layer">
                    <span>AI Applications</span>
                  </div>
                  <div className="diagram-layer">
                    <span>OpenGraph SDK</span>
                  </div>
                  <div className="diagram-layer">
                    <span>Inference Engine</span>
                  </div>
                  <div className="diagram-layer">
                    <span>Walrus Storage</span>
                  </div>
                  <div className="diagram-layer bottom-layer">
                    <span>Sui Blockchain</span>
                  </div>
                </div>
                <p className="diagram-caption">
                  OpenGraph's layered architecture enables seamless integration between AI models and the Sui blockchain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Technology 