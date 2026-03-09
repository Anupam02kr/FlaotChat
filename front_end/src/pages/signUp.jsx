import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { signupUser } from "../api/auth";

export default function Signup() {

const navigate = useNavigate();

const [formData, setFormData] = useState({
name: "",
email: "",
password: "",
confirmPassword: ""
});

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value
});
};

const handleSubmit = async (e) => {
e.preventDefault();


if (formData.password !== formData.confirmPassword) {
  alert("Passwords do not match");
  return;
}

try {

  const result = await signupUser({
    name: formData.name,
    email: formData.email,
    password: formData.password
  });

  if (result.message === "User created successfully") {
    alert("Account created successfully");
    navigate("/login");
  } else {
    alert(result.message);
  }

} catch (error) {
  console.error("Signup error:", error);
  alert("Something went wrong. Please try again.");
}


};

return ( <div className="login-container">

```
  {/* LEFT FORM */}
  <div className="box" id="left">

    <form onSubmit={handleSubmit} className="login-form">

      <img
        src="floatchatlogo.png"
        alt="FloatChat logo"
        className="top-logo"
      />

      <h2 className="page-title">Create Account</h2>

      <p className="signup-link">
        Already have an account? <Link to="/login">Sign in</Link>
      </p>

      {/* NAME */}
      <input
        className="mail"
        type="text"
        name="name"
        placeholder="Full Name"
        required
        value={formData.name}
        onChange={handleChange}
      />

      {/* EMAIL */}
      <input
        className="mail"
        type="email"
        name="email"
        placeholder="example@gmail.com"
        required
        value={formData.email}
        onChange={handleChange}
      />

      {/* PASSWORD */}
      <input
        className="password"
        type="password"
        name="password"
        placeholder="Password"
        required
        value={formData.password}
        onChange={handleChange}
      />

      {/* CONFIRM PASSWORD */}
      <input
        className="password"
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        required
        value={formData.confirmPassword}
        onChange={handleChange}
      />

      <button type="submit" className="sign-in">
        Create Account
      </button>

    </form>

  </div>

  {/* RIGHT PANEL */}
  <div className="box" id="right">

    <div className="first">
      <p className="description">Create Account</p>
      <div className="first-step">
        <h1 className="steptodo">1</h1>
      </div>
    </div>

    <div className="second">
      <p className="description">Select Data Sources</p>
      <div className="second-step">
        <h1 className="steptodo">2</h1>
      </div>
    </div>

    <div className="third">
      <p className="description">Get Data</p>
      <div className="third-step">
        <h1 className="steptodo">3</h1>
      </div>
    </div>

  </div>

</div>

);
}
