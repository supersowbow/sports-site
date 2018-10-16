import React from 'react';

import Header from '../Header/header.jsx';
import SignupForm from '../Signup/signup.jsx';
import Footer from '../Footer/footer.jsx';

import './mainContainer.css';

const MainContainer = (props) => {
  return (
    <div id="mainContainer" className="main-container toggle-closed">
      <Header openSidebar={props.openSidebar}/>
      <SignupForm />
      <Footer />
    </div>
  );
};

export default MainContainer;
