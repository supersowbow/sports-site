import React from 'react';

import Sidebar from '../Sidebar/sidebar.jsx';

import './sidebarContainer.css';

const SidebarContainer = (props) => {
  return (
    <div id="sidebar-container"
         className="sidebar-container">
         <Sidebar closeSidebar={props.closeSidebar}/>
    </div>
  );
};

export default SidebarContainer;
