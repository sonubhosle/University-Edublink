import React from 'react'
import { FaGraduationCap } from "react-icons/fa6";
import { FaChalkboardTeacher,FaBook  } from "react-icons/fa";

const Education = () => {
    return (
        <div className='fac-section'>
            <div className="scholarship section">
                <div className="icon"><FaGraduationCap color='#1AB69D' /></div>
                <div className="text-box">
                    <div className="title">Scholarship Facility</div>
                    <div className="desc">Lorem ipsum dolor sit amet cont adipiscing elit.</div>
                </div>
            </div>
            <div className="skills section">
                <div className="icon"><FaChalkboardTeacher color='#EE4A62' /></div>
                <div className="text-box">
                    <div className="title">Skilled Lecturers</div>
                    <div className="desc">Lorem ipsum dolor sit amet cont adipiscing elit.</div>
                </div>
            </div>
            <div className="store section">
                <div className="icon"><FaBook color='#8E56FF' /></div>
                <div className="text-box">
                    <div className="title">Book Library & Store</div>
                    <div className="desc">Lorem ipsum dolor sit amet cont adipiscing elit.</div>
                </div>
            </div>
        </div>
    )
}

export default Education