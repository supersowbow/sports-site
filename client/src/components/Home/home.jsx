import React from 'react';

import './home.css';

const Home = () => {
  return (
    <div className="main home-content-container">
      <img className="home-logo" 
           alt="camp logo"
           src={require("../../img/camplogo.svg")}/>
    </div>
  );
};

export default Home;
