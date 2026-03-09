import "./Main.css";
import Features from "./FeatureCard";
import Works from "./workCard";
import { TypeAnimation } from "react-type-animation";
function Main() {
  return (
    <>
      <div className="main-section">

        <TypeAnimation
  sequence={[
    "FloatChat: Your Conversational Gateway to the Oceans",
    1000
  ]}
  wrapper="h2"
  speed={50}
  repeat={0}
/>

<TypeAnimation
  sequence={[
    2000,
    "Democratize access to vast and complex oceanographic data with a simple, AI-powered conversational interface. Query, explore, and visualize ARGO float data using natural language."
  ]}
  wrapper="p"
  speed={60}
  repeat={0}
/>
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