import React from 'react';
import { NavLink } from 'react-router-dom';

import './css/burger.css';

const BurgerButton = (props) => {
  return (
    <div id="BurgerButton-Component" className="burger-container">
      {/* Burger Button */}
      <span className="burger-button" onClick={props.showSideBar}>
        <NavLink to='/'>
          <i class="fa fa-bars"></i>
        </NavLink>
      </span>
      {/* End of Burger Button */}
    </div>
  );
};

export default BurgerButton;
