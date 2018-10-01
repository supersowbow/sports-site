import React, { Component } from 'react';

import SidebarContainer from './components/sidebarContainer.jsx';
import MainContainer from './components/mainContainer.jsx';

import './App.css';

class App extends Component {
  // create state
  state = {
    isOpen: false,
  }

  // by default on small screens, the menu will be display: none

  // create a click event handler for the burger button
  handleShowSideBar = () => {
    /* when the burger button is clicked:
      1.  On Burger Component, remove class show-burger-component, add class hide-burger-component.
      2.  On App Component, remove class default-App, add class App
      3.  On Sidebar Component, remove class sidebar-closed, add class sidebar-opened
      4.  The sidebar menu will smoothly transition from left to right on the screen.
    */
    // document.getElementById("BurgerButton-Component")
    //   .classList.remove('show-burger-container');
    // document.getElementById("BurgerButton-Component")
    //   .classList.add('hide-burger-container');
    //
    // document.getElementById("App-Component")
    //   .classList.remove('default-App');
    // document.getElementById("App-Component")
    //   .classList.add('App');
    //
    // document.getElementById("Sidebar-Component")
    //   .classList.remove('sidebar-closed');
    // document.getElementById("Sidebar-Component")
    //   .classList.add('sidebar-opened');

    document.getElementById('Sidebar-Component').classList.toggle('active');
    //document.getElementById('content-container').classList.toggle('active');
  };

  // create an event handler for the cross toggle button
    /* when the cross button is clicked, the sidebar
    menu will transition from right to left, disappearing
    from the screen. The burger button will have display: block?.
    The sidebar will have a display: none.
    */

  // When cross button is clicked, the grid-template-areas should be updated
    //class called "menu-closed", grid-template-areas:". c c c c c c c c c c c";
    // a burger menu will be in place of the dot on grid-areas
  render() {
    return (
      <div id="App-Component" className="App">
        <SidebarContainer />
        <MainContainer />
      </div>
    );
  }
}

export default App;
