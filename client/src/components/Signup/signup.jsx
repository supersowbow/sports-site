import React, { Component } from 'react';
// import axios from 'axios';

import Child from './child.jsx';

import './signup.css';

class SignupForm extends Component {
    state = {
        formData: {
            guard_name: "",
            guard_email: "",
            guard_phone: "",
            child_name: "",
            age: "",
            shirt_size: ""
        },
        ageValue: "age",
        shirtValue: "shirt",
    }

    /* The handleChange event handlers will do the following:
        1.  Store the user input
        2.  Validate the user input 
        3.  Update corresponding formData object value within state
    */
    handleGuard_Name_Change = (e) => {
        let user_input = e.target.value;
        let FormData = {...this.state.formData};

        FormData.guard_name = user_input;

        this.setState({
            formData: FormData,
        });
    }
    
    handleGuard_Email_Change = (e) => {
        let user_input = e.target.value;
        let FormData = {...this.state.formData};

        FormData.guard_email = user_input;

        this.setState({
            formData: FormData,
        });
    }
    
    handleGuard_Phone_Change = (e) => {
        let user_input = e.target.value;
        let FormData = {...this.state.formData};

        FormData.guard_phone = user_input;

        this.setState({
            formData: FormData,
        });
    }
    
    handleChild_Name_Change = (e) => {
        let user_input = e.target.value;
        let FormData = {...this.state.formData};

        FormData.child_name = user_input;

        this.setState({
            formData: FormData,
        });
    }
    // End of handleChange event handlers

    // Event handlers for select tags
    handleAgeChange = (e) => {
        let user_input = e.target.value;
        let FormData = {...this.state.formData};

        FormData.age = user_input;

        this.setState({
            formData: FormData,
            ageValue: user_input, // Updates the select tag value
        });
    }

    handleShirtSizeChange = (e) => {
        let user_input = e.target.value;
        let FormData = {...this.state.formData};

        FormData.shirt_size = user_input;

        this.setState({
            formData: FormData,
            shirtValue: user_input, // Updates the select tag value
        });
    }

    // Handle form submit
    handleFormSubmit = (e) => {
        e.preventDefault();

        //POST request to http://localhost:8080 via fetch
        const FORM_DATA = {...this.state.formData};
        console.log(`This is form data from client:  ${JSON.stringify(FORM_DATA)}`);
        const url = 'http://localhost:3005/form';

        fetch(url, {
            method: "POST",
            mode: "cors",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify(FORM_DATA)
            //body: FORM_DATA
        })
        .then((response) => {
            response.json()
            // display response?
            // console.log(response);
            // response = JSON.stringify(response);
            // console.log(`Data from the server:  ${response}`);
        })
        .then((data) => {
            // do something with your data
            console.log(`Data from the server:  ${data}`);
        })
        // Error handler 
        .catch((err) => {
            console.log(err);
        });
    }

    // INPUT VALIDATION
    //   componentDidUpdate(prevProps) {
    //       if (
    //           this.state.guard_name !== prevProps.guard_name &&
    //           this.state.guard_email !== prevProps.guard_email &&
    //           this.state.guard_phone !== prevProps.guard_phone &&
    //           this.state.child_name !== prevProps.child_name &&
    //           this.state.age !== prevProps.age &&
    //           this.state.shirt_size !== prevProps.shirt_size
    //       ) {

    //       }

    render() {
        return (
            <div className="signup-container">
                <div className="form-header">
                    <h1>Sign Up!</h1>
                    <h3>To sign up for the camp, please fill out these details:</h3>
                </div>
                <form
                    method="POST"
                    onSubmit={this.handleFormSubmit}
                    className="signup-form">

                        <div className="form-elements">
                            <div className="name">
                                <input required
                                    type="text"
                                    id="guardian_name"
                                    name="guardian_name"
                                    onChange={this.handleGuard_Name_Change}/>
                                <label htmlFor="guardian_name">
                                    Guardian's Full Name
                                </label>
                            </div>

                            <div className="email">
                                <input required
                                    type="email"
                                    id="guardian_email"
                                    name="guardian_email"
                                    onChange={this.handleGuard_Email_Change}/>
                                <label htmlFor="guardian_email">
                                    Guardian's Email
                                </label>
                            </div>

                            <div className="number">
                                <input required
                                    type="text"
                                    id="phone-number"
                                    name="phone-number"
                                    onChange={this.handleGuard_Phone_Change}/>
                                <label htmlFor="phone-number">
                                    Guardian's Phone Number
                                </label>
                            </div>

                            <ul className="child-list">
                                <li>
                                    <Child handleChildChange={this.handleChild_Name_Change}
                                        handleAgeChange={this.handleAgeChange}
                                        ageValue={this.state.ageValue}
                                        handleShirtSizeChange={this.handleShirtSizeChange}
                                        shirtValue={this.state.shirtValue}/>
                                </li>
                            </ul>

                        <input required
                            type="submit"
                            value="Submit"
                            id="submit-button"
                            name="submit_button"
                            className="submit-button"/>
                        </div>
                </form>
            </div>
            
          );

    }
}

export default SignupForm;
