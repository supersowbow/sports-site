import React, { Component } from 'react';

import Child from './child.jsx';

import './signup.css';

class SignupForm extends Component {
    state = {
        form: {
            guard_name: "",
            guard_email: "",
            guard_phone: "",
            children: [
                {
                    child_name: "",
                    age: "",
                    shirt_size: ""
                }
            ],
        },
        selectValues: {
            ageValue: "ages",
            shirtValue: "shirts"
        },
        index: 0
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
        let ChildrenArray = [...this.state.form.children];

        for (let i = 0; i < ChildrenArray.length; i++) {
            const child_name = "child_name";

            // Store child array and user input in a variable
            let user_input = e.target.value;

            // Access child_name key and update the value
            ChildrenArray[i][child_name] = user_input;
            
            // Update the child's name field state
            this.setState({
                children: ChildrenArray,
                index: i
            });
        }
        console.log(`Updated: ${JSON.stringify(ChildrenArray)}`);
        console.log(this.state.index);
    }
    // End of handleChange event handlers

    /* The event handlers for the select tags will do the following:
        1.  Store user input in a variable
        2.  Store form data in a variable
        3.  Update the select tag's form field s
    */
    handleAgeChange = (e) => {
        // Store child array in a variable
        let ChildrenArray = [...this.state.form.children];

        // USE MAP INSTEAD OF FOR LOOP SINCE ChildrenArray IS AN ARRAY
        for (let i = 0; i < ChildrenArray.length; i++) {
            // Store user input in a variable
            let select_input = e.target.value;

            // Access child age key and update the value
            ChildrenArray[i].age = select_input;
            
            // Update the child's age field state
            this.setState({
                children: ChildrenArray,
            });
        }
        console.log(`Updated: ${JSON.stringify(ChildrenArray)}`);
    }

    handleShirtSizeChange = (e) => {
        // Store child array in a variable
        let ChildrenArray = [...this.state.form.children];

        // USE MAP INSTEAD OF FOR LOOP SINCE ChildrenArray IS AN ARRAY
        for (let i = 0; i < ChildrenArray.length; i++) {
            // Store user input in a variable
            let select_input = e.target.value;

            // Access child shirt_size key and update the value
            ChildrenArray[i].shirt_size = select_input;
            
            // Update the child's name field state
            this.setState({
                children: ChildrenArray,
            });
        }
        console.log(`Updated: ${JSON.stringify(ChildrenArray)}`);
    }
    // End of event handlers for select tags

    // Handle form submit
    handleFormSubmit = (e) => {
        e.preventDefault();

        // Encode Form Data and store encoded result in FormBody
        let FormData = {...this.state.form};
        let FormBody = [];

        for (let property in FormData) {
            let encodedKey = encodeURIComponent(property);
            let encodedValue = encodeURIComponent(FormData[property]);
            FormBody.push(`${encodedKey}=${encodedValue}`);
        }

        FormBody = FormBody.join("&");
        // End of Encoding FormData

        // POST request to http://localhost:8080 via fetch
        const url = 'http://localhost:3005/form';
        fetch(url, {
            method: "POST",
            mode: "cors",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: FormBody
        })
        .then((response) => {
            if (response.status === 200) {
                return response.json();
            } else {
                console.log(response.status); // Remove in Production
                throw new Error('Something went wrong on api server!');
            }
        })
        .then((data) => {
            // do something with your data
            console.log(typeof(data));
            console.log(JSON.stringify(data));
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
