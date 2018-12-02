import React from 'react';import { Link } from 'react-router-dom';

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
          <Link to="/">Home</Link>
        </li>
        <li className="about-sidebar-item"
            onClick={props.closeSidebar}>
          <Link to="/about">About</Link>
        </li>
        <li className="testimonial-sidebar-item"
            onClick={props.closeSidebar}>
          <Link to="/testimonial">Testimonial</Link>
        </li>
        <li className="signup-sidebar-item"
            onClick={props.closeSidebar}>
          <Link to="/signup">Sign Up</Link>
        </li>
        <li className="articles-sidebar-item"
            onClick={props.closeSidebar}>
          <Link to="/articles">Articles</Link>
        </li>
      </ul>
      {/* End of Sidebar Links */}
    </div>
  );
};

export default Sidebar;
