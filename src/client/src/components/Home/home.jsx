import React from 'react';
import { Link } from 'react-router-dom';

import './home.css';

const Home = () => {
  return (
    <div className="home-content-container">
      <div className="header-container">
        <div className="header-title-1">
          <h2 className="ht1-item">Pat Gavin's</h2>
        </div>
        <div className="header-img">
          <img src="https://via.placeholder.com/150" 
               alt="placeholder"
               className="hi-item"
          />
        </div>
        <div className="header-title-2">
          <h2 className="ht2-item-1">Basketball</h2>
          <h2 className="ht2-item-2">Fundamentals</h2>
          <h2 className="ht2-item-3">Camp</h2>
        </div>
      </div>
      <div className="learn-more-container">
        <Link to="/about" className="button-link">Learn More</Link>
      </div>
    </div>
  );
};

/** CODE TO INSERT IMAGE
  <div>
  <img src={require('../../img/homeLogo_480w.png')}
        className="home-logo"
        alt="Pat Gavin's Basketball Fundamentals Camp Logo"/>
  </div>

  CODE FOR LEARN MORE BUTTON
  <Link to="/about">
    <button>
      Learn More
    </button>
  </Link>

          <button className="button">
          <Link to="/about" className="button-link">Learn More</Link>
        </button>
*/

export default Home;
