import React from 'react';
import { NavLink } from 'react-router-dom';

import './css/burger.css';

const BurgerButton = (props) => {
  return (
    <div id="Burger-Component"
         className="burger-container"
         onClick={props.openSidebar}>
          <span className="burger-button">
            <NavLink to='/'>
              <i className="fa fa-bars"></i>
            </NavLink>
          </span>
    </div>
  );
};

export default BurgerButton;
