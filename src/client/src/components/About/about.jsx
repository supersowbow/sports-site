import React from 'react';
import { Link } from 'react-router-dom';
import Testimonial from '../Testimonial/testimonial';

import './about.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="info-container">
        <div className="about-title"><h1>About Us</h1></div>
        <div className="about-img-container">
          <img src="https://via.placeholder.com/150" 
                alt="placeholder"/>
        </div>
        <div className="about-message-container">
          <h1 className="about-message">
              Every year in Metarie, New Orleans, a basketball camp 
              is hosted to help local youth practice the 
              basics of basketball.
          </h1>
        </div>
      </div> {/* End of About Info */}
      <div className="testimonials-container">
        <Testimonial />
      </div> {/* End of Testimonials */}
      <div className="click-here-container">
        <h1>Want to Sign Up? <Link to="/signup">Click Here!</Link></h1>
      </div> {/* End of Click Here */}
    </div>
  );
}

export default About;
