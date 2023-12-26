import React from 'react'
import './Style.css'
import Items from './Items'

const Academic = () => {
    return (
        <div className='academic-section'>
        
            <div className='academic-header'>
                <p>POPULAR COURSES</p>
                <div className="heading">Academic Programs</div>

            </div>

            <Items />
        </div>
    )
}

export default Academic