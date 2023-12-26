
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { FaArrowRight } from "react-icons/fa6";

import './Style.css'
import { images } from './Data';
import { Link } from 'react-router-dom';


const Banner = () => {



    return (
        <div className='carousel-container'>
            <Carousel className='carousel' autoPlay={true}
                animation="slide"
                indicators={false}
                navButtonsAlwaysVisible={false}
                cycleNavigation={true}
                navButtonsProps={{
                    style: {
                        marginTop: -15,
                        height: "50px",
                        borderRadius: "3px",
                        width: "0px",
                        fontSize: "0px",
                        marginLeft: "-100px",
                        marginRight: "-163px"
                    }
                }}>
                {
                    images.map((e, i) => {
                        return (
                            <>
                                <img src={e.img} alt={e.title} />
                                <div className='content'>
                                    <p className='heading'>{e.heading}</p>
                                    <div className="title">{e.title}</div>
                                    <div className="sub-text">{e.subtext}</div>
                                    <Link className="hover-button">Find Courses <FaArrowRight className='arrow-right' /></Link>
                                    <div className="img">
                                        <img src="https://i.postimg.cc/pTYXppsJ/shape-25.png" alt="bg" />
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </Carousel>


        </div>
    );
};

export default Banner;
