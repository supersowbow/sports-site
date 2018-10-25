import React, { Component } from 'react';
import Message from './message.jsx';

import './testimonial.css';

class Testimonial extends Component {
  state = {
    // update the testimonials object to update or add testimonials
    testimonials: [
      {
        name: "Dennis Gallagher",
        occupation: "Writer at NOLA Times-Picayune.",
        quote: `"Seeing Gavin in action on the court at his camp is 
                seeing a coach in his element, thoroughly teaching 
                the basics of the game to kids at a time when the 
                fundamentals are often overlooked."`
      },
      {
        name: "Gary Bielman",
        occupation: null,
        quote: `"Pat has really stepped up with this camp. 
                He loves doing it and wants to give back."`
      }
    ]
  }

  render() {
    return (
      <div className="testimonial-content-container" id="testimonial">
        <h1>Testimonials</h1>
        <ul className="message-list-container">
        {
          this.state.testimonials.map((testimonial, index) => {
            return (
              <li key={index}>
                <Message name={testimonial.name} 
                         occupation={testimonial.occupation} 
                         quote={testimonial.quote} />
              </li>
            );
          })
        }
        </ul>
        <Message />
      </div>
    );
  }
}

export default Testimonial;
