import React from 'react';

import './header.css';

const Header = (props) => {
  return (
    <div id="Header-Component"
         className="header-container">
          <span className="burger-button"
                id="burger"
                onClick={props.openSidebar}>
            <i className="fa fa-bars"></i>
          </span>
          <div className="header-title-container">
            <h2 className="header-title-1">Pat Gavin's</h2>
            <h2 className="header-title-2">Basketball Fundamentals Camp</h2>
          </div>
    </div>
  );
};

export default Header;
