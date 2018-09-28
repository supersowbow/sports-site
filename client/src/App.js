import React, { Component } from 'react';
import Menu from './components/MenuComponent.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <div className="content">

        </div>
      </div>
    );
  }
}

export default App;
