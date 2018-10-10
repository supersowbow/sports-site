import React from 'react';

import './home.css';

/*
<img src={require('../../img/homeLogo_800w.png')}
     sizes="100vw"
     srcset={require('../../img/homeLogo_480w.png 480w, ../../img/homeLogo_800w.png 800w')}/>

     <img alt="Pat Gavin's Basketball Fundamentals Camp Logo"
          src={require('../../img/homeLogo_280w.png')}/>
*/

const Home = () => {
  return (
    <div className="home-content-container">
      <div className="pitch">
        <h1>We are great!</h1>
      </div>
    </div>
  );
};

export default Home;
