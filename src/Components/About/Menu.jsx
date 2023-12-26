import React, { useState } from 'react';
import { FaCheck } from "react-icons/fa";

const Menu = () => {
    const [activeMenu, setActiveMenu] = useState('menu1');

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
    };

    return (
        <div className='menu-btns'>
            <div className='btns flex'>
                <button onClick={() => handleMenuClick('menu1')} className={`menu-button ${activeMenu === 'menu1' ? 'active-menu' : ''}`}>
                    About EduBlink
                </button>
                <button onClick={() => handleMenuClick('menu2')} className={`menu-button border ${activeMenu === 'menu2' ? 'active-menu' : ''}`}>
                    Our Mission
                </button>
                <button onClick={() => handleMenuClick('menu3')} className={`menu-button ${activeMenu === 'menu3' ? 'active-menu' : ''}`} >
                    Our Vision
                </button>
            </div>




            <div className='menu-content'>
                {activeMenu === 'menu1' &&
                    <div className='item'>
                        <p>Magna aliquaenim minim veniam quis nostrud exercitation ullamco laborisLorem ipsum dolor sit amet consectetur adipisicing elit sed do eius tempor incididunt labore.</p>
                        <li><FaCheck color='#CE4358' />&nbsp; &nbsp;Education award achived</li>
                        <li><FaCheck color='#CE4358' />&nbsp; &nbsp;Available online courses</li>
                    </div>
                }
                {
                    activeMenu === 'menu2' &&
                    <div className='item'>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
                        <li><FaCheck color='#CE4358' />&nbsp; &nbsp;Industry Expert Instructor</li>
                        <li><FaCheck color='#CE4358' />&nbsp; &nbsp;Up-to-Date Course Content</li>
                    </div>
                }
                {activeMenu === 'menu3' && <div className='item'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer.</p>
                    <li><FaCheck color='#CE4358' />&nbsp; &nbsp;Online Remote Learning</li>
                    <li><FaCheck color='#CE4358' />&nbsp; &nbsp;Lifetime Access For Learning</li>
                </div>
                }
            </div>
        </div>
    );
};

export default Menu;
