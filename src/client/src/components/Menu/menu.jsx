import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './menu.css';

const Menu = () => {
    return (
        <div id="menu-container" className="menu-container">
            {/* Menu Links */}
            <ul className="menu-links-container">
                <li className="home-menu-item">
                    <NavLink to="/" activeClassName="selected">Home</NavLink>
                    <div className="bottom-line"></div>
                </li>
                <li className="about-menu-item">
                    <NavLink to="/about" activeClassName="selected">About</NavLink>
                    <div className="bottom-line"></div>
                </li>
                <li className="logo-menu-item">
                    <Link to="/">
                        <div className="logo-name">
                            <p>Pat</p>
                            <p>Gavin</p>
                        </div>
                    </Link>
                </li>
                <li className="signup-menu-item">
                    <NavLink to="/signup" activeClassName="selected">SignUp</NavLink>
                    <div className="bottom-line"></div>
                </li>
                <li className="articles-menu-item">
                    <NavLink to="/articles" activeClassName="selected">Articles</NavLink>
                    <div className="bottom-line"></div>
                </li>
            </ul>
            {/* End of Menu Links */}
        </div>
    );
};
  
export default Menu;
  
