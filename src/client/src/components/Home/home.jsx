import React from 'react';

import './home.css';

const Home = () => {
  return (
    <div className="home-content-container">
      <div className="header-container">
        <h2 className="header-title-1">Pat Gavin's</h2>
        <h2 className="header-title-2">
          Basketball Fundamentals Camp
        </h2>
      </div>
      {/**
      <div>
      <img src={require('../../img/homeLogo_480w.png')}
           className="home-logo"
           alt="Pat Gavin's Basketball Fundamentals Camp Logo"/>
      </div>
      */}
    </div>
  );
};

export default Home;
