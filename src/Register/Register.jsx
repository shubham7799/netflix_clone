import React from 'react'
import './register.scss'
import {Link} from 'react-router-dom';

function Register() {
  return (
      <div className="fullPage">
    <div className="register">
            <nav className="top">
                <div className="logo">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" 
                        alt="" />
                </div>
                <div className="link">
                    <Link to="/Signin" className="loginButton">Sign In</Link>
                </div>
            </nav>
        
        <div className="container">
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <p>
              Ready to watch? Enter your email to create or restart your membership.
            </p>
            <div className="input">
                <input type="email" placeholder='Email Address' />
                <Link to="/Home" className="registerButton"><button className='registerButton'>Get Started</button></Link>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Register