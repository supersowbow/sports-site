import React from 'react';

import './home.css';

const Home = () => {
  return (
    <div className="home-content-container">
      <div className="home-logo">
        <img alt="Pat Gavin's Basketball Fundamentals Camp Logo"
             src={require('../../img/camplogo.jpg')}/>
      </div>
      <div className="pitch">
        <h1>We are great!</h1>
      </div>
    </div>
  );
};

export default Home;
