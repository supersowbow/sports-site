import React from 'react';

import './about.css';

const About = () => {
  return (
    <div className="about-content-container" 
          id="about"
          ref={this.aboutRef}>
      <h1>About</h1>
      <h3>
        Every year in Metarie, New Orleans, a basketball camp 
        is hosted to help local youth practice the 
        basics of basketball.
      </h3>
    </div>
  );
}

export default About;
