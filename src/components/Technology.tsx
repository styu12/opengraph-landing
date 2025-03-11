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
              OpenGraph's technology stack is designed to enable seamless integration of AI models with the 
              Sui blockchain ecosystem. Our infrastructure allows for fully onchain AI model inference, 
              creating a new paradigm for transparent and verifiable artificial intelligence.
            </p>
            
            <p>
              At the core of our technology is the integration with Sui, a high-performance Layer 1 blockchain 
              that provides the security and scalability needed for AI operations. Combined with our Walrus 
              on-chain storage layer, we've created a comprehensive solution for deploying and running AI 
              models in a decentralized environment.
            </p>
            
            <p>
              The OpenGraph platform handles the complexities of blockchain integration, allowing AI developers 
              to focus on their models rather than the underlying infrastructure. Our SDK provides simple APIs 
              for deploying models, managing data, and executing inference operations directly on the blockchain.
            </p>
            
            <h3>Key Components</h3>
            
            <div className="tech-component">
              <h4>Sui Blockchain Integration</h4>
              <p>
                Built on Sui's high-performance Layer 1 blockchain, providing scalability and security for AI operations. 
                Our integration leverages Sui's unique features to enable efficient execution of AI models in a 
                decentralized environment.
              </p>
            </div>
            
            <div className="tech-component">
              <h4>Walrus Storage Layer</h4>
              <p>
                Our proprietary on-chain storage solution optimized for AI model data. Walrus enables efficient 
                storage and retrieval of model weights, inputs, and outputs, making fully onchain inference possible 
                at scale.
              </p>
            </div>
            
            <div className="tech-component">
              <h4>Model Deployment Framework</h4>
              <p>
                A comprehensive framework for deploying AI models to the blockchain. Our tools handle the conversion 
                of traditional ML models to formats optimized for onchain execution, ensuring efficient performance 
                while maintaining model accuracy.
              </p>
            </div>
            
            <div className="tech-component">
              <h4>Onchain Inference Engine</h4>
              <p>
                Our specialized inference engine executes AI models directly on the blockchain, providing transparent 
                and verifiable results. This enables new use cases where trust and verification are critical to the 
                application's success.
              </p>
            </div>
          </div>
          
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
    </section>
  )
}

export default Technology 