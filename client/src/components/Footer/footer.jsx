import React from 'react';

import './footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="links-container">
        <h5>Links</h5>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Testimonials</li>
          <li>Signup</li>
          <li>Articles</li>
        </ul>
      </div>
      <div className="connect-container">
        <h5>Connect</h5>
        <p>Facebook</p>
      </div>
    </div>
  );
};

export default Footer;
