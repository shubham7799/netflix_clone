import React from 'react'
import './login.scss'
import {Link} from 'react-router-dom';

function Login() {
  return (
    <div className="login">
      <div className="top">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email or phone number" />
          <input type="password" placeholder="Password" />
          <Link to="/Home" className='homeLink' ><button className="loginButton">Sign In</button></Link>
          <span>
            New to Netflix? <Link className='registerLink' to="/Register">Sign up now.</Link>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  )
}

export default Login