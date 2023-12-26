import React from 'react'
import './Style.css'
import Education from './Education'
import About from '../About/About'
import ClassDetails from '../ClassDetails/ClassDetails'
import Academic from '../Academic/Academic'
import Campus from '../Campus/Campus'
import Testimonial from '../Testimonial/Testimonial'
import EventSection from '../Events/EventSection'
import Certificate from '../Certificate/Certificate'

const Main = () => {
  return (
    <div className='main-section'>
        <div className="container">
          <Education />
          <About />
          <ClassDetails />
        </div>

        <Academic />
        <Campus />
        <Testimonial />
        <EventSection />
       <Certificate />
    </div>
  )
}

export default Main