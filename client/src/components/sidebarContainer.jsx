import React from 'react';

import Sidebar from './sidebar.jsx';

import './css/sidebarContainer.css';

const SidebarContainer = (props) => {
  return (
    <div id="sidebar-container"
         className="sidebar-container
                    sidebar-closed">
         <Sidebar closeSidebar={props.closeSidebar}/>
    </div>
  );
};

export default SidebarContainer;
