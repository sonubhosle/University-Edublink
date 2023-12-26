import React from 'react'
import './Style.css'
import Menu from './Menu'

const About = () => {
  return (
    <div className='about-section'>
            <div className="animated-images">
              <img className='img-one-circle' src="https://i.postimg.cc/yx8sQBHm/shape-13.png" alt="bg" />

            </div>
        <div className="about-info">
          <div className="left-about">
          <p>ABOUT US</p>
           <div className="heading">We Provide Best Education Services For You</div>
           <Menu />
          </div>
          <div className="right-about">
            <img className='big-img' src="https://i.postimg.cc/D0ttKKG4/about-04.webp" alt="" />
            <img className='sm-img' src="https://i.postimg.cc/kgNLLzgD/about-05.webp" alt="" />
          </div>
        </div>

    </div>
  )
}

export default About