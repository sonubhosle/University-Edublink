import React from 'react'
import { Link } from 'react-router-dom'

const Brand = () => {
    return (

      <div className='brand-section'>
        <p>The Latest Events from EduBlink. <Link>View All</Link> </p>
        <div className='brand'>
            <img src="https://edublink.react.devsblink.com/assets/images/brand/brand-01.png" className='border-right' alt="brand " />
            <img src="https://edublink.react.devsblink.com/assets/images/brand/brand-02.png" className='border-right' alt="brand " />
            <img src="https://edublink.react.devsblink.com/assets/images/brand/brand-03.png" className='border-right' alt="brand " />
            <img src="https://edublink.react.devsblink.com/assets/images/brand/brand-04.png" className='border-right' alt="brand " />
            <img src="https://edublink.react.devsblink.com/assets/images/brand/brand-05.png" className='border-right' alt="brand " />
            <img src="https://edublink.react.devsblink.com/assets/images/brand/brand-06.png" alt="brand" />
        </div>
      </div>
    )
}

export default Brand