import React from 'react'
import {useNavigate } from 'react-router-dom';
import './splash.scss'

function Splash() {
    const navigate=useNavigate()
  return (
    <div className="splashDiv">
        <video muted autoPlay src="netflixanimation.mp4" type="video/mp4" onEnded={()=>{
          navigate('/Register',{replace:true})
        }} />
    </div>
  )
}

export default Splash