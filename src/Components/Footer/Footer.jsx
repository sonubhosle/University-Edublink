import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";


const Footer = () => {
  return (

   <>
    <div className="footer flex">
      <div className="footer-section">
        <div className="section">
        <div className="logo">
          <img src="https://edublink.react.devsblink.com/assets/images/logo/logo-light-2.png" alt="logo" />
        </div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis dolor at veritatis sed doloribus.</p>
        <div className="contct-info">
          <li>Add:&nbsp;70-80 Upper St Norwich NR2</li>
          <li>Call:<span>+01 123 5641 231</span></li>
          <li>Email:<span>info@edublink.com</span></li>
        </div>
        </div>
        <div className="section">
          <h3>Online Platform</h3>
          <Link>About</Link>
          <Link>Courses</Link>
          <Link>Instructor</Link>
          <Link>Events</Link>
          <Link>Instructor Profile</Link>
          <Link>Purchase Guide</Link>
        </div>
        <div className="section">
          <h3>Links</h3>
          <Link>Contact Us</Link>
          <Link>Gallery</Link>
          <Link>News & Articles</Link>
          <Link>FAQ's</Link>
          <Link>Sign In/Registration</Link>
          <Link>Coming Soon</Link>
        </div>
        <div className="section">
          <h3>Contacts</h3>
           <p>Enter your email address to register to our newsletter subscription</p>
           <div className="input-box" >
            <input type="text" placeholder='Your email'/>
            <div className="button">Subscribe <FaArrowRight className='arrow-right' /></div>
           </div>
           <div className="social-icons">
            <Link></Link>
            <Link></Link>
            <Link></Link>
            <Link></Link>
            <Link></Link>
           </div>
        </div>
      </div>
    </div>

    <div className="footer-sm">
      <p>Copyright 2023 <Link>EduBlink</Link> Designed By <Link>DevsBlink.</Link> All Rights Reserved</p>
    </div>
   </>
  )
}

export default Footer








