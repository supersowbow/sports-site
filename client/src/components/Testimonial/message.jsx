import React from 'react';

import './message.css';

const Message = (props) => {
  return (
    <div className="message-container" id="message-container">
        <h3>{props.name}</h3>
        <h5>{props.occupation}</h5>
        <p>{props.quote}</p>
    </div>
  );
};

export default Message;