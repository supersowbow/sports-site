import React, { Component } from 'react';

import Header from '../Header/header.jsx';
import Home from '../Home/home.jsx';
import About from '../About/about.jsx';
import Testimonial from '../Testimonial/testimonial.jsx';
import SignupForm from '../Signup/signup.jsx';
import Articles from '../Articles/articles.jsx';
import Footer from '../Footer/footer.jsx';

import './mainContainer.css';

class MainContainer extends Component {

  // Before component mounts and before page unloads...
  // The webpage will be scrolled to the top
  componentWillMount() {
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };
  }

  // create a click event handler for the burger button
  handleOpenSidebar = (e) => {
    e.preventDefault();

    // Adds a smooth transition to the Sidebar component while it's entering
    document.getElementById("sidebar-container").style.width = "250px";
    document.getElementById("mainContainer").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.2)";
  }

  render() {
    return (
      <div id="mainContainer" className="main-container toggle-closed">
        <Header openSidebar={this.handleOpenSidebar}/>
        <Home />
        <About />
        <Testimonial />
        <SignupForm />
        <Articles />
        <Footer />
      </div>
    );
  }
}

export default MainContainer;
