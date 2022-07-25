import React from 'react'
import './footer.scss'

function Footer() {
  return (
    <footer>
        <div className="footerContent">
            <div className='footerRow'>
                <p>FAQ</p>
                <p>Help Centre</p>
                <p>Account</p>
                <p>Media Centre</p>
            </div>
            <div className='footerRow'>
                <p>Investor</p>
                <p>Jobs</p>
                <p>Ways to watch</p>
                <p>Terms of Use</p>
            </div>
            <div className='footerRow'>
                <p>Privacy</p>
                <p>Legal</p>
                <p>Only on Netflix</p>
                <p></p>
            </div>
            <div className='footerRow'>
                <span>Netflix India</span>
            </div>
            <div className='creator'>Made by <span>Shubham Suryavanshi👋</span></div>
        </div>
    </footer>
  )
}

export default Footer