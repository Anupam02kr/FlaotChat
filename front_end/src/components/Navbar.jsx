import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

const navigate = useNavigate();
const token = localStorage.getItem("token");

const handleLogout = () => {
localStorage.removeItem("token");
navigate("/");
window.location.reload();
};

return ( <nav className="navbar">

  {/* Logo */}
  <div className="nav-left" onClick={() => navigate("/")}>
    <h2>FloatChat</h2>
  </div>

  {/* Navigation Buttons */}
  <div className="nav-center">

    <button className="nav-btn" onClick={() => navigate("/home")}>
      Home
    </button>

    <button className="nav-btn" onClick={() => {
      document.getElementById("Features")?.scrollIntoView({behavior:"smooth"});
    }}>
      Features
    </button>

    <button className="nav-btn" onClick={() => {
      document.getElementById("how-it-works")?.scrollIntoView({behavior:"smooth"});
    }}>
      How It Works
    </button>

    <button className="nav-btn" onClick={() => {
      document.getElementById("contact")?.scrollIntoView({behavior:"smooth"});
    }}>
      Contact
    </button>

  </div>

  {/* Right Side Auth Buttons */}
  <div className="nav-right">

    {!token && (
      <>
        <button className="navbar-btn" onClick={() => navigate("/login")}>
          Login
        </button>

        <button className="navbar-btn" onClick={() => navigate("/signup")}>
          Signup
        </button>
      </>
    )}

    {token && (
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    )}

  </div>

</nav>

);
  }

export default Navbar;
  