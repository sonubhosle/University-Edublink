import React, { useState } from 'react';
import './Style.css'
import { Link } from 'react-router-dom'

import {  FaChevronDown, FaRegHeart, FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { FiShoppingCart, FiSearch } from "react-icons/fi";
import TopHeader from './TopHeader';


const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };


    return (
        <>
        <TopHeader />

            <div class="header-navbar flex">
                <div className="logo-section">
                    <Link><img src='https://edublink.react.devsblink.com/assets/images/logo/logo-light-2.png' /></Link>
                </div>
                <div className={`menu-section flex ${isMenuOpen ? 'open' : ''}`}>
                    <div className="menu flex">
                        <div className="menu-header ">
                            <Link to='/'>
                                <img src="https://edublink.react.devsblink.com/assets/images/logo/logo-white.png" alt="" />
                            </Link>
                            <Link className='close'> <IoClose size={20} color='#fff' onClick={toggleMenu} /></Link>
                        </div>
                        <li><Link >Home <p className='chevron'><FaChevronDown /></p></Link>
                            <ul class="sub-menu">
                                <li><Link to="/">EduBlink Education <p className="hot color-red">HOT</p></Link></li>
                                <li><Link to="/home-distant-learning">Distant Learning</Link></li>
                                <li><Link to="/home-university">University</Link></li>
                                <li><Link to="/home-online-academy">Online Academy</Link></li>
                                <li><Link to="/home-kitchen">Kitchen Coach</Link></li>
                                <li><Link to="/home-yoga-instructor">Yoga Instructor</Link></li>
                                <li><Link to="/home-kindergarten">Kindergarten</Link></li>
                                <li><Link to="/home-modern-schooling">Modern Schooling <p className="hot color-green">New</p></Link></li>
                                <li><Link to="/landing-demo">Landing Demo</Link></li>
                            </ul>
                        </li>
                        <li><Link >Pages <p className='chevron'><FaChevronDown /></p> </Link>
                            <ul class="sub-menu big-menu">
                                <div className="grid">
                                    <h2>Inner Pages</h2>
                                    <li><Link>About Us 1</Link></li>
                                    <li><Link>About Us 2</Link></li>
                                    <li><Link>About Us 3</Link></li>
                                    <li><Link>Instructor 1</Link></li>
                                    <li><Link>Instructor 2</Link></li>
                                    <li><Link>Instructor 3</Link></li>
                                    <li><Link>Instructor Profile</Link></li>
                                    <li><Link>Pricing Table</Link></li></div>
                                <div className="grid">
                                    <h2>Inner Pages</h2>
                                    <li><Link>Gallery Grid</Link></li>
                                    <li><Link>Gallery Masonry</Link></li>
                                    <li><Link>Event Grid</Link></li>
                                    <li><Link>Event List</Link></li>
                                    <li><Link>Event Details</Link></li>
                                    <li><Link>Purchase Guide</Link></li>
                                    <li><Link>404 Error</Link></li>
                                    <li><Link>Coming Soon</Link></li></div>
                                <div className="grid">
                                    <h2>Inner Pages</h2>
                                    <li><Link>Faq's</Link></li>
                                    <li><Link>Privacy </Link></li>
                                    <li><Link>Terms & Condition</Link></li>
                                    <li><Link>Sign In</Link></li>
                                    <li><Link>Cart</Link></li>
                                    <li><Link>Wishlist</Link></li>
                                    <li><Link>Checkout</Link></li></div>
                            </ul>
                        </li>
                        <li><Link >Courses<p className='chevron'><FaChevronDown /></p></Link>
                            <ul class="sub-menu">
                                <li><Link to="/course-style-1">Course Style 1</Link></li>
                                <li><Link to="/course-style-2">Course Style 2</Link></li>
                                <li><Link to="/course-style-3">Course Style 3</Link></li>
                                <li><Link to="/course-style-4">Course Style 4</Link></li>
                                <li><Link to="/course-style-5">Course Style 5</Link></li>
                                <li><Link to="/course-details">Course Details 1</Link></li>
                                <li><Link to="/course-details-2">Course Details 2</Link></li>
                                <li><Link to="/course-details-3">Course Details 3</Link></li>
                            </ul>
                        </li>
                        <li><Link >Blog  <p className='chevron'><FaChevronDown /></p></Link>
                            <ul class="sub-menu">
                                <li><Link to="/blog-standard">Blog Standard</Link></li>
                                <li><Link to="/blog-masonry">Blog Masonry</Link></li>
                                <li><Link to="/blog-list">Blog List</Link></li>
                                <li><Link to="/blog-details">Blog Details</Link></li>
                            </ul>
                        </li>
                        <li><Link >Contact  <p className='chevron'><FaChevronDown /></p></Link>
                            <ul class="sub-menu">
                                <li><Link to="/contact-us">Contact Us</Link></li>
                                <li><Link to="/contact-me">Contact Me</Link></li>
                            </ul>
                        </li>
                    </div>

                </div>
                <div className="right-section flex">

                    <div className='search' >
                        <Link> <FiSearch size={22} color='#fff' onClick={toggleSearch} /></Link>
                        <div className={`search-box ${isSearchOpen ? 'open' : ''}`}>
                            <div className="header-search flex">

                                <Link to='/'>
                                    <img src="https://edublink.react.devsblink.com/assets/images/logo/logo-white.png" alt="" />
                                </Link>
                                <Link> <IoClose size={40} color='#fff' onClick={toggleSearch} /></Link>

                            </div>

                            <div className="search-input flex">
                                <input type="text" className="input" placeholder='Search Here...' />
                                <button type="submit"> <FiSearch size={30} color='#fff' /></button>

                            </div>

                        </div>
                    </div>
                    <div className="wishlist">
                        <Link to='/wishlist'><FaRegHeart size={22} color='#fff' /><div className="bedage">0</div> </Link>
                    </div>
                    <div className="cart">
                        <Link to='/cart'><FiShoppingCart size={22} color='#fff' /> <div className="bedage">0</div></Link>
                    </div>

                    <div className="bars">
                        < FaBars size={22} color='#fff' onClick={toggleMenu} />
                    </div>


                </div>

            </div>

        </ >
    )
}

export default Header