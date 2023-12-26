import React from 'react'
import './Style.css'

import { FaArrowRight } from 'react-icons/fa6';
import { MdOutlineWatchLater } from "react-icons/md";
;
import { events } from './Data';
import { IoLocationOutline } from "react-icons/io5";
import Brand from './Brand';


const EventSection = () => {
  return (
    <div className='event-section'>
      <div className="event-header">
        <p> EVENTS & NEWS</p>
        <div className="heading">Popular Events & News</div>
      </div>
      <div className='event-box'>
        {
          events.map((e, j) => {
            return (
              <div className="e-box">
                <div className="img-box">
                  <img src={e.img} alt="" />
                  <div className="mode"> <MdOutlineWatchLater size={17} /> {e.mode}</div>

                </div>
                <div className="content-info">
                  <div className="date-box">
                    <div className="date">{e.date}</div>
                    <div className="big">{e.big}</div>
                  </div>
                  <div className="title">{e.title}</div>
                  <div className="desc">{e.desc}</div>
                  <div className="location"><IoLocationOutline size={23} color='#EE4A62 ' />&nbsp; {e.location}</div>

                  <div className="hover-button">Learn More <FaArrowRight className='arrow-right' /></div>

                </div>
              </div>
            )
          })
        }
      </div>
       <Brand />
    </div>
  )
}

export default EventSection