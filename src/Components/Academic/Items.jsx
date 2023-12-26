import React, { useState } from 'react'

import { FaArrowRight } from 'react-icons/fa6';
import { MdOutlineWatchLater } from "react-icons/md";
import { FaStar } from "react-icons/fa6";

const Items = () => {
    const [activeMenu, setActiveMenu] = useState('menu1');

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
    };


    return (
        <>
            <div className='academic-menu'>
                <div className='btn flex'>
                    <button onClick={() => handleMenuClick('menu1')} className={`menu-name ${activeMenu === 'menu1' ? 'active' : ''}`}>
                        UNDERGRADUATE PROGRAM
                    </button>
                    <button onClick={() => handleMenuClick('menu2')} className={`menu-name border ${activeMenu === 'menu2' ? 'active' : ''}`}>
                        GRADUATE PROGRAM
                    </button>
                    <button onClick={() => handleMenuClick('menu3')} className={`menu-name ${activeMenu === 'menu3' ? 'active' : ''}`} >
                        ONLINE PROGRAM
                    </button>
                </div>




                <div className='academic-cources'>
                    {activeMenu === 'menu1' &&
                        <div className='item-box'>
                            <div className="box">
                                <div className="img-box">
                                    <img src="https://i.postimg.cc/ZRj3WrxJ/course-07.jpg" alt="" />
                                    <div className="mode"> <MdOutlineWatchLater size={17} /> Online + Onsite</div>
                                </div>
                                <div className="content-info">
                                    <div className="related">Business</div>
                                    <div className="title">Public Administration</div>
                                    <div className="desc">Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.</div>

                                    <div className="rating flex">
                                        <div className="stars ">
                                            <span><FaStar color='#F8B81F' /></span>
                                            <span><FaStar color='#F8B81F' /></span>
                                            <span><FaStar color='#F8B81F' /></span>
                                            <span><FaStar color='#F8B81F' /></span>
                                            <span><FaStar color='#F8B81F' /></span>
                                        </div>
                                        <div className="views">(5.0 /11 Rating)</div>
                                    </div>
                                    <div className="hover-button">Add Cart <FaArrowRight className='arrow-right' /></div>

                                </div>
                            </div>
                            <div className="box">
                                <div className="img-box">
                                    <img src="https://i.postimg.cc/7hfCbjLN/course-08.jpg" alt="" />
                                    <div className="mode"> <MdOutlineWatchLater size={17} />  Online + Onsite</div>
                                </div>
                                <div className="content-info">
                                    <div className="related">Business</div>
                                    <div className="title">Major in Economics</div>
                                    <div className="desc">Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.</div>

                                    <div className="rating flex">
                                    <div className="stars ">
                                            <span><FaStar color='#F8B81F' /></span>
                                            <span><FaStar color='#F8B81F' /></span>
                                            <span><FaStar color='#F8B81F' /></span>
                                            <span><FaStar color='#F8B81F' /></span>
                                            <span><FaStar color='#F8B81F' /></span>
                                        </div>
                                        <div className="views">(4.9 /15 Rating)</div>
                                    </div>
                                    <div className="hover-button">Add Cart <FaArrowRight className='arrow-right' /></div>

                                </div>
                            </div>
                            <div className="box">
                                <div className="img-box">
                                    <img src="https://i.postimg.cc/g2vxwVG1/course-09.jpg" alt="" />
                                    <div className="mode"><MdOutlineWatchLater size={17} />  Online Only</div>

                                </div>
                                <div className="content-info">
                                    <div className="related">Business</div>
                                    <div className="title">Business Studies</div>
                                    <div className="desc">Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.</div>
                                    <div className="rating flex">
                                    <div className="stars ">
                                            <span><FaStar color='#F8B81F' /></span>
                                            <span><FaStar color='#F8B81F' /></span>
                                            <span><FaStar color='#F8B81F' /></span>
                                            <span><FaStar color='#F8B81F' /></span>
                                            <span><FaStar color='#F8B81F' /></span>
                                        </div>
                                        <div className="views">(4.4 /10 Rating)</div>
                                    </div>
                                    <div className="hover-button">Add Cart <FaArrowRight className='arrow-right' /></div>

                                </div>
                            </div>
                        </div>
                    }
                    {
                        activeMenu === 'menu2' &&
                        <div className='item-box'>
                            <div className="box">
                                <div className="img-box">
                                    <img src="https://i.postimg.cc/ZRj3WrxJ/course-07.jpg" alt="" />
                                    <div className="mode"> <MdOutlineWatchLater size={17} /> Online + Onsite</div>

                                </div>
                                <div className="content-info">
                                    <div className="related">Business</div>
                                    <div className="title">Public Administration</div>
                                    <div className="desc">Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.</div>
                                    <div className="rating flex">
                                    <div className="stars ">
                                            <span><FaStar color='#F8B81F' /></span>
                                            <span><FaStar color='#F8B81F' /></span>
                                            <span><FaStar color='#F8B81F' /></span>
                                            <span><FaStar color='#F8B81F' /></span>
                                            <span><FaStar color='#F8B81F' /></span>
                                        </div>
                                        <div className="views">(5.0 /11 Rating)</div>
                                    </div>
                                    <div className="hover-button">Add Cart <FaArrowRight className='arrow-right' /></div>

                                </div>
                            </div>
                            <div className="box">
                                <div className="img-box">
                                    <img src="https://i.postimg.cc/7hfCbjLN/course-08.jpg" alt="" />
                                    <div className="mode"> <MdOutlineWatchLater size={17} />  Online + Onsite</div>

                                </div>
                                <div className="content-info">
                                    <div className="related">Business</div>
                                    <div className="title">Major in Economics</div>
                                    <div className="desc">Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.</div>
                                    <div className="rating flex">
                                    <div className="stars ">
                                            <span><FaStar color='#F8B81F' /></span>
                                            <span><FaStar color='#F8B81F' /></span>
                                            <span><FaStar color='#F8B81F' /></span>
                                            <span><FaStar color='#F8B81F' /></span>
                                            <span><FaStar color='#F8B81F' /></span>
                                        </div>
                                        <div className="views">(4.9 /15 Rating)</div>
                                    </div>
                                    <div className="hover-button">Add Cart <FaArrowRight className='arrow-right' /></div>

                                </div>
                            </div>
                        </div>
                    }
                    {activeMenu === 'menu3' &&
                        <div className='item-box'>
                            <div className="box">
                                <div className="img-box">
                                    <img src="https://i.postimg.cc/g2vxwVG1/course-09.jpg" alt="" />
                                    <div className="mode"><MdOutlineWatchLater size={17} /> Online Only</div>

                                </div>
                                <div className="content-info">
                                    <div className="related">Business</div>
                                    <div className="title">Business Studies</div>
                                    <div className="desc">Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.</div>
                                    <div className="rating flex">
                                    <div className="stars ">
                                            <span><FaStar color='#F8B81F' /></span>
                                            <span><FaStar color='#F8B81F' /></span>
                                            <span><FaStar color='#F8B81F' /></span>
                                            <span><FaStar color='#F8B81F' /></span>
                                            <span><FaStar color='#F8B81F' /></span>
                                        </div>
                                        <div className="views">(4.4 /10 Rating)</div>
                                    </div>
                                    <div className="hover-button">Add Cart <FaArrowRight className='arrow-right' /></div>

                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Items