import React from 'react';import { Link } from 'react-router-dom';

import 'font-awesome/css/font-awesome.min.css';

import './sidebar.css';

const Sidebar = (props) => {

  // Enable a smooth scroll to elements on page when links are clicked
  // const refScroll = (element) => {
    
  //   const home = document.getElementById("home");
  //   const about = document.getElementById("about");
  //   const testimonial = document.getElementById("testimonial");
  //   const signup = document.getElementById("signup");
  //   const articles = document.getElementById("articles");
    
  //   const hash = element.target.hash;

  //   switch (hash) {
  //     case "#home":
  //       window.scrollTo({
  //         left: 0,
  //         top: home.offsetTop-100,
  //         behavior: "smooth"
  //       });
  //       break;

  //     case "#about":
  //       window.scrollTo({
  //         left: 0,
  //         top: about.offsetTop-100,
  //         behavior: "smooth"
  //       });
  //       break;

  //     case "#testimonial":
  //       window.scrollTo({
  //         left: 0,
  //         top: testimonial.offsetTop-100,
  //         behavior: "smooth"
  //       });
  //       break;

  //     case "#signup":
  //       window.scrollTo({
  //         left: 0,
  //         top: signup.offsetTop-100,
  //         behavior: "smooth"
  //       });
  //       break;

  //     case "#articles":
  //       window.scrollTo({
  //         left: 0,
  //         top: articles.offsetTop-100,
  //         behavior: "smooth"
  //       });
  //       break;
      
  //     default:
  //       break;
  //   }
  // };

  return (
    <div id="Sidebar-Component" className="sidebar">
      {/* Menu Header */}
      <div className="sidebar-header">
        <Link to='/' className='logo'>
          <img
              src={require('../../img/sidebar_logo.png')}
              alt="Pat Gavin's Basketball Fundamentals Camp Logo"/>
        </Link>
        <span
           id="cross-button"
           className="cross"
           onClick={props.closeSidebar}>
          <i className="fa fa-times"></i>
        </span>
      </div>
      {/* End of Menu Header */}

      <div className="hr"></div>

      {/* Sidebar Links */}
      <ul className="sidebar-links-container">
        <li className="home-sidebar-item"
            onClick={props.closeSidebar}>
          <Link to={{hash: "#home"}} onClick={refScroll}>
            Home
          </Link>
        </li>
        <li className="about-sidebar-item"
            onClick={props.closeSidebar}>
          <Link to={{hash: "#about"}} onClick={refScroll}>
            About
          </Link>
        </li>
        <li className="testimonial-sidebar-item"
            onClick={props.closeSidebar}>
          <Link to={{hash: "#testimonial"}} onClick={refScroll}>
            Testimonial
          </Link>
        </li>
        <li className="signup-sidebar-item"
            onClick={props.closeSidebar}>
          <Link to={{hash: "#signup"}} onClick={refScroll}>
            Sign Up
          </Link>
        </li>
        <li className="articles-sidebar-item"
            onClick={props.closeSidebar}>
          <Link to={{hash: "#articles"}} onClick={refScroll}>
            Articles
          </Link>
        </li>
      </ul>
      {/* End of Sidebar Links */}
    </div>
  );
};

export default Sidebar;
