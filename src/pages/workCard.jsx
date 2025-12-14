import "./WorkCard.css";

 function WorkCard() {
    return (
        <>
        <working-section id="how-it-works" >
          <h3 className="heading" style={{ textAlign: "center" }}>How It Works</h3>
          <div className="steps-container">
            {/* <!-- Step 1 --> */}
            <div className="step">
              <span className="step-number">1.</span>
              <h4 className="step-title">Ask a Question</h4>
              <p className="step-content">
                Simply type your question into the chat interface.
              </p>
            </div>
            {/* <!-- Step 2 --> */}
            <div className="step">
              <span className="step-number">2.</span>
              <h4 className="step-title">AI Finds the Data</h4>
              <p className="step-content">
                Our system translates your query into a database request to find
                the right information.
              </p>
            </div>
            {/* <!-- Step 3 --> */}
            <div className="step">
              <span className="step-number">3.</span>
              <h4 className="step-title">Get Your Insights</h4>
              <p className="step-content">
                Receive a clear, concise answer with an interactive
                visualization.
              </p>
            </div>
          </div>
        </working-section>

        <br /><br /><br />
        </>
    )
}
export default WorkCard;