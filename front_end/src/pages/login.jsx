import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { loginUser } from "../api/auth";
import { useNavigate } from "react-router-dom";
export default function Login() {

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  const result = await loginUser(formData);

  if (result.message === "Login successful") {
    localStorage.setItem("token", "loggedin");
    localStorage.removeItem("tableData");
    navigate("/home"); 
      // 👈 change this to your home route
  } else {
    alert(result.message);
  }
};

  return (
    <div className='login-container'>
      <div className='box' id='left'>
        <form onSubmit={handleSubmit} className='login-form'>
          <img src='floatchatlogo.png' alt='FloatChat logo' className='top-logo' />
          <h2 className='page-title'>Sign in</h2>

          <p className='signup-link'>
            Don&apos;t have an account? <Link to='/signUp'>Create now</Link>
          </p>

          {/* EMAIL INPUT */}
          <input
            className='mail'
            type='email'
            name='email'
            placeholder='example@gmail.com'
            value={formData.email}
            onChange={handleChange}
            required
          />

          {/* PASSWORD INPUT */}
          <input
            className='password'
            type='password'
            name='password'
            placeholder='password'
            value={formData.password}
            onChange={handleChange}
            required
          />

          <div className='remember-me'>
            <input type='checkbox' id='remember' />
            <label htmlFor='remember'>Remember me</label>
          </div>

          <Link to='/forgot-password' className='forgot-password'>
            Forgot Password?
          </Link>

          <button type='submit' className='sign-in'>
            Sign in
          </button>
        </form>

        <p className='separator'><span>OR</span></p>

        <div className='social-login'>
          <button className='google-button'>
            <img src='/googlelogo.svg' alt='Google logo' className='social-logo' />
            Continue With Google
          </button>

          <button className='facebook-button'>
            <img src='/facebook.svg' alt='Facebook logo' className='social-logo' />
            Continue With Facebook
          </button>
        </div>
      </div>

      <div className='box' id='right'>
        <div className="first">
          <p className='description'>Create Account</p>
          <div className="first-step">
            <h1 className='steptodo'>1</h1>
          </div>
        </div>

        <div className="second">
          <p className='description'>Select Data Sources</p>
          <div className="second-step">
            <h1 className='steptodo'>2</h1>
          </div>
        </div>

        <div className="third">
          <p className='description'>Get Data</p>
          <div className="third-step">
            <h1 className='steptodo'>3</h1>
          </div>
        </div>
      </div>
    </div>
  );
}