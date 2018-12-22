import React, { Component } from 'react';

import Menu from './components/Menu/menu.jsx';
import MainContainer from './components/MainContainer/mainContainer.jsx';
import Footer from './components/Footer/footer.jsx';

import './App.css';

class App extends Component {

  // create a click event handler for the increment button on <Child />
  handleIncrement = (e) => {
      e.preventDefault();
      let kids = this.state.numOfKids;

      this.setState = {
          numOfKids: kids ++,
      };
  }

  // Make the menu item active by changing its color
  activeItem = (e) => {
    e.preventDefault();
    console.log(`ACTIVE!`);
  }

  render() {
    return (
      <div id="App-Component" className="App">
        <Menu activeItem={this.activeItem} />
        <MainContainer incrementButton={this.handleIncrement} />
        <Footer />
      </div>
    );
  }
}

export default App;
