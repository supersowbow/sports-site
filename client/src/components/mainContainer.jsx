import React from 'react';
import { Switch, Route} from 'react-router-dom';

import BurgerButton from './burgerbutton.jsx'
import Home from './home.jsx';
import About from './about.jsx';
import Testimonial from './testimonial.jsx';
import Signup from './signup.jsx';
import Articles from './/articles.jsx';

import './css/mainContainer.css';

const MainContainer = (props) => {
  return (
    <div id="mainContainer" className="main-container toggle-closed">
      <BurgerButton openSidebar={props.openSidebar}/>
      {/* Wrap the CSS Transition Group in React Transition Group*/}
      {/* Wrap the Switch in CSS Transition Group */}
      <Switch>
          {/* React Routes */}
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/testimonial' component={Testimonial} />
          <Route path='/signup' component={Signup} />
          <Route path='/articles' component={Articles} />
          {/* End of React Routes */}
      </Switch>
    </div>
  );
};

export default MainContainer;
