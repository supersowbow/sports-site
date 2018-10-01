import React from 'react';
import { NavLink } from 'react-router-dom';

import 'font-awesome/css/font-awesome.min.css';
import './css/sidebar.css';


const Sidebar = () => {
  return (
    <div id="Sidebar-Component" className="sidebar">
      {/* Menu Header */}
      <div className="sidebar-header">
        <NavLink to='/' activeClassName='logo'>
          <img src={window.location.origin + '/img/MIDDLELOGO.svg'} alt="logo"/>
        </NavLink>
        <a href="/" className="cross">
          <i class="fa fa-times"></i>
        </a>
      </div>
      {/* End of Menu Header */}

      {/* React Router NavLinks */}
      <ul className="sidebar-links-container">
        <li className="home-sidebar-item center">
          <NavLink to='/'>Home</NavLink>
        </li>
        <li className="about-sidebar-item center">
          <NavLink to='/about'>About</NavLink>
        </li>
        <li className="signup-sidebar-item center">
          <NavLink to='/signup'>Sign Up</NavLink>
        </li>
        <li className="testimonial-sidebar-item center">
          <NavLink to='/testimonial'>Testimonial</NavLink>
        </li>
        <li className="articles-sidebar-item center">
          <NavLink to='/articles'>Articles</NavLink>
        </li>
      </ul>
      {/* End of React Router NavLinks */}
    </div>
  );
};

export default Sidebar;
