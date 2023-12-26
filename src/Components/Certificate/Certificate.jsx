import React from 'react'
import './Style.css'
import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Certificate = () => {
    return (
        <div className='certificate-section'>
                
                
                <div className="top-images">
                <img className='circle'  src="https://i.postimg.cc/Bb8S6gDz/shape-08.png" alt="bg" />
                <img className='green-circle' src="https://i.postimg.cc/yx8sQBHm/shape-13.png" alt="bg" />

                </div>
                <div className="bottom-images">
                <img className='wave' src="https://i.postimg.cc/k4G91cj5/shape-09.png" alt="" />
                <img className='pink' src="https://i.postimg.cc/6qGKwQxJ/shape-10.png" alt="" />
            </div>
            <div className="cer-header">
                <div className="heading">Get Your Quality Skills <span style={{color:" #25B88C"}}>Certificate </span> <br /> Through EduBlink</div>
            </div>
           
            <Link className="hover-button">Get started now <FaArrowRight className='arrow-right' /></Link>

        </div>
    )
}

export default Certificate