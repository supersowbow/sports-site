import React from 'react';
import { Link } from 'react-router-dom';

import './menu.css';

const Menu = (props) => {
    return (
        <div id="menu-container" className="menu-container">
            <h4 className="title">
                <Link to="/">Pat Gavin</Link>
            </h4>
            {/* Menu Links */}
            <ul className="menu-links-container">
                <li className="home-menu-item"
                    onClick={props.activeItem}>
                    <Link to="/">Home</Link>
                </li>
                <li className="about-menu-item"
                    onClick={props.activeItem}>
                    <Link to="/about">About</Link>
                </li>
                <li className="signup-menu-item"
                    onClick={props.activeItem}>
                    <Link to="/signup">SignUp</Link>
                </li>
                <li className="articles-menu-item"
                    onClick={props.activeItem}>
                    <Link to="/articles">Articles</Link>
                </li>
            </ul>
            {/* End of Menu Links */}
        </div>
    );
};
  
export default Menu;
  
