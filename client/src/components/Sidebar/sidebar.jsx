import React from 'react';

import 'font-awesome/css/font-awesome.min.css';

import './sidebar.css';

const Sidebar = (props) => {
  return (
    <div id="Sidebar-Component" className="sidebar">
      {/* Menu Header */}
      <div className="sidebar-header">
        <a href='/' className='logo'>
          <img
              src={require('../../img/sidebar_logo.png')}
              alt="Pat Gavin's Basketball Fundamentals Camp Logo"/>
        </a>   
        <span href="/"
           id="cross-button"
           className="cross"
           onClick={props.closeSidebar}>
          <i className="fa fa-times"></i>
        </span>
      </div>
      {/* End of Menu Header */}

      <div className="hr"></div>

      <ul className="sidebar-links-container">
        <li className="home-sidebar-item"
            onClick={props.closeSidebar}>
          <a href='/'>Home</a>
        </li>
        <li className="about-sidebar-item"
            onClick={props.closeSidebar}>
          <a href='/about'>About</a>
        </li>
        <li className="signup-sidebar-item"
            onClick={props.closeSidebar}>
          <a href='/signup'>Sign Up</a>
        </li>
        <li className="testimonial-sidebar-item"
            onClick={props.closeSidebar}>
          <a href='/testimonial'>Testimonial</a>
        </li>
        <li className="articles-sidebar-item"
            onClick={props.closeSidebar}>
          <a href='/articles'>Articles</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
