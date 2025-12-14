import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import Inputfield from './inputfiels.jsx';

export default function Login() {
  return (
    <div className='login-container'>
      <div className='box' id='left'>
        <form action='#' className='login-form'>
          <img src='floatchatlogo.png' alt='FloatChat logo' className='top-logo' />
          <h2 className='page-title'>Sign in</h2>
          <p className='signup-link'>
            Don&apos;t have an account? <Link to='/signUp'>Create now</Link>
          </p>
          <Inputfield className='mail' type='email' placeholder='example@gmail.com' />
          <Inputfield className='password' type='password' placeholder='password' />
          <div className='remember-me'>
            <input type='checkbox' id='remember' />
            <label htmlFor='remember'>Remember me</label>
          </div>
          <Link to='/forgot-password' className='forgot-password'>Forgot Password?</Link>
          <button type='submit' className='sign-in'>Sign in</button>
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
        <div className='steps'>
          <div className='step'>
            <h1>1</h1>
            <p>Step 1 description</p>
          </div>
          <div className='step'>
            <h1>2</h1>
            <p>Step 2 description</p>
          </div>
        </div>
      </div>
    </div>
  );
}