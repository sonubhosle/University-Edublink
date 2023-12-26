import React from 'react'
import { Link } from 'react-router-dom'
import { FaPhoneAlt, } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
const TopHeader = () => {
    return (
        <div className="header-top flex">
            <div className="top-header-left">
                <ul className="header-info flex">
                    <li className='border-right'><Link to="tel:+011235641231"><FaPhoneAlt className='icon' size={14} color='#EE4A62' />Call: 123 4561 5523</Link></li>
                    <li><Link to="mailto:info@edublink.com" rel="noreferrer" target="_blank"><MdEmail className='icon' color='#EE4A62' />Email: info@edublink.com</Link></li>
                </ul>
            </div>
            <div className="top-header-right">
                <ul className="header-info flex">
                    <li className='border-right'><Link to="/sign-in">Login</Link></li>
                    <li><Link to="/sign-in">Register</Link></li>
                    <li ><Link className="hover-button-header">Apply Now <FaArrowRight className='arrow-right' /></Link></li>
                </ul>
            </div>

        </div>
    )
}

export default TopHeader