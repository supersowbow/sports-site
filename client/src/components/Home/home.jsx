import React from 'react';

import './home.css';

const Home = () => {
  return (
    <div className="home-content-container" id="home">
      <img src={require('../../img/homeLogo_480w.png')}
           className="home-logo"
           alt="Pat Gavin's Basketball Fundamentals Camp Logo"/>
    </div>
  );
};

export default Home;
