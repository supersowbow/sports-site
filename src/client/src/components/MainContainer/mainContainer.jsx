import React, { Component } from 'react';
import { Route } from "react-router-dom";

import Home from '../Home/home.jsx';
import About from '../About/about.jsx';
import SignupForm from '../Signup/signup.jsx';
import Articles from '../Articles/articles.jsx';

import './mainContainer.css';

class MainContainer extends Component {

  render() {
    return (
      <div className="main-container toggle-closed">
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/signup" component={SignupForm} />
        <Route exact path="/articles" component={Articles} />
      </div>
    );
  }
}

export default MainContainer;
