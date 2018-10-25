import React from 'react';

import Header from '../Header/header.jsx';
import Home from '../Home/home.jsx';
import About from '../About/about.jsx';
import Testimonial from '../Testimonial/testimonial.jsx';
import SignupForm from '../Signup/signup.jsx';
import Articles from '../Articles/articles.jsx';
import Footer from '../Footer/footer.jsx';

import './mainContainer.css';

const MainContainer = (props) => {
  return (
    <div id="mainContainer" className="main-container toggle-closed">
      <Header openSidebar={props.openSidebar}/>
      <Home />
      <About />
      <Testimonial />
      <SignupForm />
      <Articles />
      <Footer />
    </div>
  );
};

export default MainContainer;
