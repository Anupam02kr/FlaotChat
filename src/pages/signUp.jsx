import React from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <div className='signup-container'>
      <h1>FloatChat</h1>
      <div className='sign-up-page'>
        <form>
          <h3 className='Signup-title'>Create an Account</h3>
          <p className='text'>Full Name</p>
          <input type='text' className='name' required />
          <p className='text'>Email Id</p>
          <input type='email' className='signup-mail' required />
          <p className='text'>Password</p>
          <input type='password' className='signup-password' required />
          <p className='text'>Confirm Password</p>
          <input type='password' className='confirm-pass' required />
          <button type='submit' className='sign-up-button'>Sign up</button>
          <p className='signup-text'>
            Already have an account? <Link to='/login'>Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
}