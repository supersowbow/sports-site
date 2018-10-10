import React from 'react';

import './signup.css';

const Signup = () => {
  return (
    <div className="signup-container">
        <form action=""
              method="post"
              className="signup-form"
              onSubmit="">

            <div>
                <label htmlFor="guardian_name">Guardian's Full Name</label>
                <input required
                       type="text"
                       id="guardian_name"
                       name="guardian_name"
                       placeholder=""/>
            </div>

            <div>
                <label htmlFor="guardian_email">Guardian's Email</label>
                <input required
                       type="email"
                       id="guardian_email"
                       name="guardian_email"
                       placeholder="Email"/>
            </div>

            <div>
                <label htmlFor="phone-number">Guardian's Phone Number</label>
                <input required
                       type="text"
                       id="phone-number"
                       name="phone-number"
                       placeholder="555-555-5555"/>
            </div>

            <div>
                <label htmlFor="child_name">Child's Full Name</label>
                <input required
                       type="text"
                       id="child_name"
                       name="child_name"
                       placeholder="Child's Full Name"/>
            </div>

            <input required
                   type="submit"
                   value="Submit"
                   id="submit-button"
                   name="submit_button"/>
        </form>
    </div>
  );
};

export default Signup;
