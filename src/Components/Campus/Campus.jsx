import React from 'react'
import './Style.css'
import { IoMdTimer } from "react-icons/io";
import { MdOutlineScreenshotMonitor } from "react-icons/md";
import { FaDumbbell } from "react-icons/fa6";


const Campus = () => {
    return (
        <div className='campus-section'>

            <div className="left-campus-section">
            <img src="https://i.postimg.cc/nhKzx4Fh/campus-01.webp" alt="" />

            </div>
            <div className="right-campus-section">
            <div className="capm-heading">
                    <p>CAMPUS</p>
                    <div className="heading">Campus Life</div>
                </div>
                <div className="camp-sect">
                 <div className="section flex">
                    <div className="icons-camp red"><IoMdTimer size={50} /></div>
                     <div>
                     <div className="big-title">Student Life</div>
                    <div className="sm-title">Nostrud exer ciation laboris nis aliqup comodo perspiatix omnis iste natus.</div>
                     </div>
                </div>
                <div className="section flex">
                    <div className="icons-camp green"><MdOutlineScreenshotMonitor size={50} /></div>
                    <div>
                    <div className="big-title">Arts & Clubs</div>
                    <div className="sm-title">Omnis iste natus error sit voluptatem accusan tium doloreque laudantum.</div>
                    </div>
                </div>
                <div className="section flex">
                    <div className="icons-camp yellow">< FaDumbbell size={50} /></div>
                   <div>
                   <div className="big-title">Sports &amp; Fitness</div>
                    <div className="sm-title">Tempor incididunt ut labore et dolore magna aliqua enim minim veniam quis.</div>
                   </div>
                </div>
                 </div>
            </div>
        </div>
    )
}

export default Campus