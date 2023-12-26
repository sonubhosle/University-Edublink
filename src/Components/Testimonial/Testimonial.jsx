import React from 'react'
import './Style.css'
import { test } from './Data'
import { FaStar } from 'react-icons/fa6'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 3,
        slidesToSlide: 3

    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 2
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1
    }
};

const Testimonial = () => {
    return (
        <div className='testimonial-section'>
            <div className="test-header">
                <p> TESTIMONIALS</p>
                <div className="heading">What Our Students Have To Say</div>

                <p className='sub-text'> Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod tempor incidid unt labore.</p>
            </div>

           <div className='multi-carousel'>
           <Carousel responsive={responsive} customButtonGroup={false}  infinite={true}   navButtonsAlwaysVisible={false} >
                 
                {
                        test.map((e, index) => {
                            return (
                                <div className='card'>
                                    <div className="card-top">
                                        <img src={e.img} alt="" />
                                        <div className="desc">{e.desc}</div>
                                        <div className="rating"></div>
                                        <div className="stars ">
                                            <span><FaStar color='#F8B81F' /></span>
                                            <span><FaStar color='#F8B81F' /></span>
                                            <span><FaStar color='#F8B81F' /></span>
                                            <span><FaStar color='#F8B81F' /></span>
                                            <span><FaStar color='#F8B81F' /></span>
                                        </div>
                                    </div>
                                    <div className="card-bottom flex">
                                        <img src={e.userimg} alt={e.name} />
                                        <div>
                                            <div className="name">{e.name}</div>
                                            <div className="role">{e.role}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                 

                </Carousel>
           </div>
        </div>
    )
}

export default Testimonial