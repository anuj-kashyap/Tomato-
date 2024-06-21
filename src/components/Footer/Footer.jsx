import React, { useState } from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    const [menu, setMenu] = useState("Home")
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellat veritatis iure, enim impedit eos consequuntur quo id tempore libero!</p>
                {/* <div className="footer-social-icon">
                    <img src={assets.facebook_icon}  alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div> */}
                 <div className="footer-social-icon">
                    <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
                        <img src={assets.facebook_icon} alt="Facebook" />
                    </a>
                    <a href="https://www.twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                        <img src={assets.twitter_icon} alt="Twitter" />
                    </a>
                    <a href="https://www.linkedin.com/yourprofile" target="_blank" rel="noopener noreferrer">
                        <img src={assets.linkedin_icon} alt="LinkedIn" />
                    </a>
                </div>
            </div>
         
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 545448545</li>
                    <li>Contact@fooddeli.com</li>
                </ul>

            </div>
            
        </div>
        <hr />
        <p className='footer-copyright'>copyright 2024 tomato.com - All Right Reserved.</p>


    </div>
  )
}

export default Footer