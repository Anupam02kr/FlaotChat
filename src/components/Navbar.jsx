import "./Navbar.css";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" aria-label="Go to homepage">
        <div className="navbar-logo">FloatChat</div>
      </Link>
      <ul className="navbar-links">
        <li><Link to="/Home" aria-label="Go to Home">Home</Link></li>
        <li><a href="#features" aria-label="View features">Features</a></li>
        <li><a href="#how-it-works" aria-label="Learn how it works">How It Works</a></li>
        <li><a href="#contact" aria-label="Contact us">Contact</a></li>
      </ul>
      <Link to="/login" aria-label="Get started with FloatChat">
        <button className="navbar-btn">Get Started</button>
      </Link>
    </nav>
  );
}

export default Navbar;