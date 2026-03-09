import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>About FloatChat</h3>
          <p>AI-powered interface for ARGO Ocean Data Discovery.</p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <div className="footer-icons">
            <a href="#" aria-label="Email">
              <img
                src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                alt="email"
              />
            </a>
            <a href="#" aria-label="Twitter">
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                alt="twitter"
              />
            </a>
            <a href="#" aria-label="LinkedIn">
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                alt="linkedin"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;