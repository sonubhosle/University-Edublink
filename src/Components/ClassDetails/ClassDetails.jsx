import React from 'react'
import './Style.css'


const ClassDetails = () => {
    return (
        <div className='class-details'>
            <div className="section">
                <div className="big-title green">29.3K</div>
                <div className="sm-title">STUDENT ENROLLED</div>
            </div>
            <div className="section">
                <div className="big-title pink">32.4K</div>
                <div className="sm-title">CLASS COMPLETED</div>
            </div>
            <div className="section">
                <div className="big-title blue">100%</div>
                <div className="sm-title">SATISFACTION RATE</div>
            </div>
            <div className="section">
                <div className="big-title org">354%</div>
                <div className="sm-title">TOP INSTRUCTORS</div>
            </div>
        </div>
    )
}

export default ClassDetails