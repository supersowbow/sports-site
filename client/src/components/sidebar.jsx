import React from 'react';
import { NavLink } from 'react-router-dom';

import 'font-awesome/css/font-awesome.min.css';
import './css/sidebar.css';


const Sidebar = (props) => {
  return (
    <div id="Sidebar-Component" className="sidebar">
      {/* Menu Header */}
      <div className="sidebar-header">
        <NavLink to='/' activeClassName='logo'>
          <img
              src="https://via.placeholder.com/180x180"alt="logo"
          />
        </NavLink>
        <a href="/"
           className="cross"
           onClick={props.closeSidebar}>
          <i className="fa fa-times"></i>
        </a>
      </div>
      {/* End of Menu Header */}

      {/* React Router NavLinks */}
      <ul className="sidebar-links-container">
        <li className="home-sidebar-item center"
            onClick={props.closeSidebar}>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li className="about-sidebar-item center"
            onClick={props.closeSidebar}>
          <NavLink to='/about'>About</NavLink>
        </li>
        <li className="signup-sidebar-item center"
            onClick={props.closeSidebar}>
          <NavLink to='/signup'>Sign Up</NavLink>
        </li>
        <li className="testimonial-sidebar-item center"
            onClick={props.closeSidebar}>
          <NavLink to='/testimonial'>Testimonial</NavLink>
        </li>
        <li className="articles-sidebar-item center"
            onClick={props.closeSidebar}>
          <NavLink to='/articles'>Articles</NavLink>
        </li>
      </ul>
      {/* End of React Router NavLinks */}
    </div>
  );
};

export default Sidebar;
