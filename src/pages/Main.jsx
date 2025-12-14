import "./Main.css";
import Features from "./featurecard";
import Works from "./workCard";

function Main() {
  return (
    <>
      <div className="main-section">
        <h2>FloatChat: Your Conversational Gateway to the Oceans</h2>
        <p>
          Democratize access to vast and complex oceanographic data with a
          simple, AI-powered conversational interface. Query, explore, and
          visualize ARGO float data using natural language.
        </p>
      <a href="#" className="btn">
          Explore the Data
        </a>
      </div>
      <br /><br/><br/>
      <hr style={{ opacity: 0.3 }} />
      <div className="features-section">
        <Features/>
      </div>
      <br /><br /><br />

      <div className="works">
      <Works/>
      </div>
    </>
  );
}
export default Main;