import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Header from '../Header/header.jsx';
import Home from '../Home/home.jsx';
import About from '../About/about.jsx';
import Testimonial from '../Testimonial/testimonial.jsx';
import Signup from '../Signup/signup.jsx';
import Articles from '../Articles/articles.jsx';
import Footer from '../Footer/footer.jsx';

import './mainContainer.css';

const MainContainer = (props) => {
  return (
    <div id="mainContainer" className="main-container toggle-closed">
      <Header openSidebar={props.openSidebar}/>
      <Switch>
          {/* React Routes */}
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/testimonial' component={Testimonial} />
          <Route path='/signup' component={Signup} />
          <Route path='/articles' component={Articles} />
          {/* End of React Routes */}
      </Switch>
      <Footer />
    </div>
  );
};

export default MainContainer;
