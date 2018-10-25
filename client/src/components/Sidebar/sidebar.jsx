import React from 'react';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

import 'font-awesome/css/font-awesome.min.css';

import './sidebar.css';

const Sidebar = (props) => {
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
          <Link smooth to={{hash: "#home"}}>
            Home
          </Link>
        </li>
        <li className="about-sidebar-item"
            onClick={props.closeSidebar}>
          <Link smooth to={{hash: "#about"}}>
            About
          </Link>
        </li>
        <li className="signup-sidebar-item"
            onClick={props.closeSidebar}>
          <Link smooth to={{hash: "#signup"}}>
            Sign Up
          </Link>
        </li>
        <li className="testimonial-sidebar-item"
            onClick={props.closeSidebar}>
          <Link smooth to={{hash: "#testimonial"}}>
            Testimonial
          </Link>
        </li>
        <li className="articles-sidebar-item"
            onClick={props.closeSidebar}>
          <Link smooth to={{hash: "#articles"}}>
            Articles
          </Link>
        </li>
      </ul>
      {/* End of Sidebar Links */}
    </div>
  );
};

export default Sidebar;
