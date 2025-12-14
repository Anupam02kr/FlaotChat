import "./FeatureCard.css";

function FeatureCard() {
  return (
    <>
      <h3 style={{textAlign:"center",color:"white",fontSize:"2rem"}}>Key Features</h3>
      {/* card 1 */}
      <div className="Features">
      <div className="card">
        <div className="card-icon"><i className="fa-solid fa-message"></i></div>
        <h4 className="card-title">Natural Language Queries</h4>
        <p className="card-content">
          Ask questions about ocean data in plain English. No need for complex
          code or technical skills.
        </p>
      </div>

      {/* card 2 */}
      <div className="card">
        <div className="card-icon"><i className="fa-solid fa-chart-simple"></i></div>
        <h4 className="card-title">Interactive Visualizations</h4>
        <p className="card-content">
          Visualize data with interactive dashboards, including mapped
          trajectories, depth-time plots, and profile comparisons.
        </p>
      </div>

      {/* Card 3 */}
      <div className="card">
        <div className="card-icon"><i className="fa-solid fa-plug-circle-bolt"></i></div>
        <h4 className="card-title">Powered by AI & RAG</h4>
        <p className="card-content">
          Leverages powerful LLMs and Retrieval-Augmented Generation to
          interpret your queries and find precise data.
        </p>
      </div>
      </div>
    </>
  );
}
export default FeatureCard;