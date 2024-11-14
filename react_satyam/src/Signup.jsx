import React from 'react';
import './Sign.css';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="signup">
    <div className="form-container">
      <p className="title">Register</p>
      <form className="form">
        <input type="text" className="input" placeholder="Username" />
        <input type="email" className="input" placeholder="Email" />
        <input type="password" className="input" placeholder="Password" />
        <input type="password" className="input" placeholder="Confirm Password" />
        <button type="submit" className="form-btn">Sign Up</button>
      </form>
      <p className="sign-up-label">
        Already have an account?<span className="sign-up-link"><Link to="/login" className="sign-up-link"> Log in</Link></span>
      </p>
    </div>
    </div>
  );
};

export default Signup;
