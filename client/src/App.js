import React, { Component } from 'react';

import SidebarContainer from './components/SidebarContainer/sidebarContainer.jsx';
import MainContainer from './components/MainContainer/mainContainer.jsx';

import './App.css';

class App extends Component {
  // create state
  state = {
      numOfKids: 1,
  }

  // create a click event handler for the burger button
  handleOpenSidebar = (e) => {
    e.preventDefault();

    // Adds a smooth transition to the Sidebar component while it's entering
    document.getElementById("sidebar-container").style.width = "250px";
    document.getElementById("mainContainer").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.2)";
  }

  handleCloseSidebar = (e) => {
      e.preventDefault();
      
      // store viewport width in variable
      let viewWidth = window.innerWidth >= 900 ? true : false;

      // if viewport width is >= 900px, sidebar should not close
      if (viewWidth) {
        return;
      } else {
          // else (the screen is small), close sidebar
          // Adds a smooth transition to the Sidebar component while it's exiting
          document.getElementById("sidebar-container").style.width = "0px";
          document.getElementById("mainContainer").style.marginLeft = "0px";
          document.body.style.backgroundColor = "rgba(0,0,0,0)";
      }
  }

  // create a click event handler for the increment button on <Child />
  handleIncrement = (e) => {
      e.preventDefault();
      let kids = this.state.numOfKids;

      this.setState = {
          numOfKids: kids ++,
      };
  }

  render() {
    return (
      <div id="App-Component" className="App">
        <SidebarContainer
            closeSidebar={this.handleCloseSidebar} />
        <MainContainer openSidebar={this.handleOpenSidebar}
                       incrementButton={this.handleIncrement}
                       numberOfKids={this.state.numOfKids} />
      </div>
    );
  }
}

export default App;
