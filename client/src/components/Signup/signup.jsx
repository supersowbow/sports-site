import React, { Component } from 'react';
// import axios from 'axios';

import Child from './child.jsx';

import './signup.css';

class SignupForm extends Component {
    state = {
        form: {
            guard_name: "cunt",
            guard_email: "",
            guard_phone: "",
            child_name: "", // oreos: elaquent
            age: "",
            shirt_size: ""
        },
        selectValues: {
            ageValue: "ages",
            shirtValue: "shirts"
        }
    }
    
    // Function to update the form field state with user input
    updateFormState = (field, input) => {
        // Store form data in a variable
        let FormData = {...this.state.form};
    
        // Update the the form field's state
        FormData[field] = input;
        this.setState({form: FormData});
    }

    /* The handleChange event handlers will do the following:
        1.  Store name of key (data type: string) in variable
        2.  Store user input in a variable
        3.  Pass string and user input as arguments in updateFormState
    */
    handleGuard_Name_Change = (e) => {
        const g_name = "guard_name";
        let user_input = e.target.value;
        this.updateFormState(g_name, user_input);
    }
    
    handleGuard_Email_Change = (e) => {
        const g_email = "guard_email";
        let user_input = e.target.value;
        this.updateFormState(g_email, user_input);
    }
    
    handleGuard_Phone_Change = (e) => {
        const g_phone = "guard_phone";
        let user_input = e.target.value;
        this.updateFormState(g_phone, user_input);
    }
    
    handleChild_Name_Change = (e) => {
        const c_name = "child_name";
        let user_input = e.target.value;
        this.updateFormState(c_name, user_input);
    }
    // End of handleChange event handlers

    /* The event handlers for the select tags will do the following:
        1.  Store user input in a variable
        2.  Store form data in a variable
        3.  Update the select tag's form field s
    */
    handleAgeChange = (e) => {
        let select_input = e.target.value;
        let FormData = {...this.state.form};

        FormData.age = select_input;
        this.setState({form: FormData});
    }

    handleShirtSizeChange = (e) => {
        let select_input = e.target.value;
        let FormData = {...this.state.form};

        FormData.shirt_size = select_input;
        this.setState({form: FormData});
    }
    // End of event handlers for select tags

    // Handle form submit
    handleFormSubmit = (e) => {
        e.preventDefault();

        // POST request to http://localhost:8080 via fetch
        let FormData = {...this.state.form};
        FormData = JSON.stringify(FormData, null, 4);
        console.log(`Form data after stringify: ${FormData}`);
        
        const url = 'http://localhost:3005/form';

        fetch(url, {
            method: "POST",
            mode: "cors",
            headers: {
                //'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: FormData
        })
        .then((response) => {
            response.json()
            JSON.parse(response);
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
                            className="submit-button"/>
                        </div>
                </form>
            </div>
            
          );

    }
}

export default SignupForm;
