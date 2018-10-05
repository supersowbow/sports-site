import React from 'react';

import './header.css';

const Header = (props) => {
  return (
    <div id="Header-Component"
         className="header-container"
         onClick={props.openSidebar}>
          <span className="burger-button"
                id="burger-button">
            <i className="fa fa-bars"></i>
          </span>
          <div className="header-title">
            <h2>Pat Gavin's</h2>
            <h2>Basketball Fundamentals Camp</h2>
          </div>
    </div>
  );
};

export default Header;
