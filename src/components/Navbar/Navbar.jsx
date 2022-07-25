import React, { useState } from 'react'
import './navbar.scss'
import {Search,Notifications, ArrowDropDown} from '@material-ui/icons'
import {Link} from 'react-router-dom'

function Navbar() {
    const [isScrolled,setScrolled]=useState(false)
    window.onscroll=(()=>{
        setScrolled(window.pageYOffset === 0? false:true)
    })
    
  return (
    <div className={isScrolled?'navbar scrolled':'navbar'}>
        <div className="container">
            <div className="left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="Netflix" />
                <span>Home</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New</span>
                <span>My List</span>
            </div>
            <div className="right">
                <div className='full'>
                    <Search className="icon"/>
                    <span>KID</span>
                    <Notifications className='icon'/>
                    <Link to="/Signin"><img src="http://pm1.narvii.com/6612/77cb318cb45610d3f272a78087f93935ac5b5cdc_00.jpg" alt="" /></Link>
                    <div className="profile">
                        <ArrowDropDown className='icon'/>
                        <div className="options">
                            <span>Settings</span>
                            <Link to="/Signin"><span className='logout'>Log out</span></Link>
                        </div>
                    </div>
                </div> 
                <div className='mobile'>
                    <Search className="icon"/>
                    <Link to="/Signin"><img src="http://pm1.narvii.com/6612/77cb318cb45610d3f272a78087f93935ac5b5cdc_00.jpg" alt="" /></Link>
                    <div className="profile">
                        <ArrowDropDown className='icon'/>
                        <div className="options">
                            <span>Home</span>
                            <span>Series</span>
                            <span>Movies</span>
                            <span>New</span>
                            <span>My List</span>
                            <span>Settings</span>
                            <span className='logout'><Link to="/Signin">Log out</Link></span>
                        </div>
                    </div>
                </div>   
            </div>
        </div>
    </div>
  )
}

export default Navbar