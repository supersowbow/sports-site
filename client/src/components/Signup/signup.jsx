import React, { Component } from 'react';

import Child from './child.jsx';
//import SubmissionModal from './submissionModal.jsx';

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
        index: 0,
        nameCompleted: false,
        ageCompleted: false,
        shirtCompleted: false,
        submitted: false
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

    // Handle Child Field Change
    handleChildFieldChange = (e) => {
        // Assign children array, user input, 
        // selected html tag, and index in variables
        let ChildrenArray = [...this.state.form.children];
        let user_input = e.target.value;
        let id = e.target.id;
        let i = this.state.index;
    
        // loop thru array
        ChildrenArray.forEach(() => {
            // check to see which field is being updated
            switch (id) {
                case "child_name":
                    // update the correct value in object
                    ChildrenArray[i].child_name = user_input;
                    // update the field's state
                    this.setState({
                        children: ChildrenArray,
                        nameCompleted: true
                    });
                    break;
    
                case "age":
                    // update the correct value in object
                    ChildrenArray[i].age = user_input;
                    // update the field's state
                    this.setState({
                        children: ChildrenArray,
                        ageCompleted: true
                    });
                    break;
                
                case "shirt_size":
                    // update the correct value in object
                    ChildrenArray[i].shirt_size = user_input;
                    // update the field's state
                    this.setState({
                        children: ChildrenArray,
                        shirtCompleted: true
                    });
                    break;

                default:
                    break;
            }
        });

        let nameCompleted = this.state.nameCompleted;
        let ageCompleted = this.state.ageCompleted;
        let shirtCompleted = this.state.shirtCompleted;
    
        if (nameCompleted && ageCompleted && shirtCompleted) {
            // if all the fields are complete, increment the index
            this.setState({
                index: i++,
                nameCompleted: false,
                ageCompleted: false,
                shirtCompleted: false
            });
        }
    }

    // Handle form submit
    handleFormSubmit = (e) => {
        e.preventDefault();

        let FormData = {...this.state.form};
        let FormBody = JSON.stringify(FormData);

        // POST request to http://localhost:8080/form via fetch
        const url = '/form';
        fetch(url, {
            method: "POST",
            mode: "cors",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
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
            data = JSON.stringify(data);
            console.log(`Data from the server:  ${data}`);
        })
        // Error handler 
        .catch((err) => {
            console.log(err);
        });
    }

    render() {
        return (
            <div className="signup-container" id="signup">
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
                                    <Child handleChildChange={this.handleChildFieldChange}
                                        ageValue={this.state.ageValue}
                                        shirtValue={this.state.shirtValue} />
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
