import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './css/menu.css';


const Menu = () => {
  return (
    <div className="menu">
      <div className="logo-container">
        <a className="logo" href="/">
          <img src={window.location.origin + '/img/MIDDLELOGO.svg'}
               alt="logo"
          />
        </a>
        <a href="/" className="cross">
          <i class="fa fa-times"></i>
        </a>
      </div>
      <div className="menu-links">
        <a className="home-menu-item"
           href="/">
           Home
        </a>
        <a className="about-menu-item"
           href="/">
           About
        </a>
        <a className="signup-menu-item"
           href="/">
           Sign Up
        </a>
        <a className="testimonial-menu-item"
           href="/">
           Testimonial
        </a>
        <a className="articles-menu-item"
           href="/">
           Articles
        </a>
      </div>
    </div>
  );
};

export default Menu;
