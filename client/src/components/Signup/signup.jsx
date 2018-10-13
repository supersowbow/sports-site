import React from 'react';

import Child from './child.jsx';

import './signup.css';

const Signup = (props) => {
    return (
        <div className="signup-container">
            <div className="form-header">
                <h1>Sign Up!</h1>
                <h3>To sign up for the camp, please fill out these details:</h3>
            </div>
            <form action=""
                method="post"
                className="signup-form"
                onSubmit="">
                    <div className="form-elements">
                        <div className="name">
                            <input required
                                   type="text"
                                   id="guardian_name"
                                   name="guardian_name"/>
                            <label htmlFor="guardian_name">
                                Guardian's Full Name
                            </label>
                        </div>

                        <div className="email">
                            <input required
                                   type="email"
                                   id="guardian_email"
                                   name="guardian_email"/>
                            <label htmlFor="guardian_email">
                                Guardian's Email
                            </label>
                        </div>

                        <div className="number">
                            <input required
                                   type="text"
                                   id="phone-number"
                                   name="phone-number"/>
                            <label htmlFor="phone-number">
                                Guardian's Phone Number
                            </label>
                        </div>

                        <ul className="child-list">
                            <li>
                                <Child />
                            </li>
                        </ul>

                    <input required
                           type="submit"
                           value="Submit"
                           id="submit-button"
                           name="submit_button"/>
                    </div>
            </form>
        </div>
    );
};

export default Signup;
