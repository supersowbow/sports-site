import React from 'react';
import { Link } from 'react-router-dom';

import './home.css';

const Home = () => {
  return (
    <div className="home-content-container">
      <div className="header-container">
        <h2>Pat Gavin's</h2>
        <img src="https://via.placeholder.com/150" alt="placeholder"/>
        <h2>Basketball Fundamentals</h2>
        <h2>Camp</h2>
      </div>
      <div className="learn-more">
          <Link to="/about">
            <button>
              Learn More
            </button>
          </Link>
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
*/

export default Home;
