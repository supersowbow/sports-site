import React, { Component } from 'react';
// import axios from 'axios';

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
        1.  Store the user input, 
        2.  validate the user input 
        3.  Update corresponding formData object value within state
    */
    handleGuard_Name_Change = (e) => {
        let user_input = e.target.value;
        let FormData = {...this.state.formData}

        FormData.guard_name = user_input;

        this.setState({
            formData: FormData,
        });
      }
    
      handleGuard_Email_Change = (e) => {
          let user_input = e.target.value;
          let FormData = {...this.state.formData}

          FormData.guard_email = user_input;

          this.setState({
              formData: FormData,
          });
      }
    
      handleGuard_Phone_Change = (e) => {
          let user_input = e.target.value;
          let FormData = {...this.state.formData}

          FormData.guard_phone = user_input;

          this.setState({
              formData: FormData,
          });
      }
    
      handleChild_Name_Change = (e) => {
          let user_input = e.target.value;
          let FormData = {...this.state.formData}

          FormData.child_name = user_input;

          this.setState({
              formData: FormData,
          });
      }
      // End of handleChange event handlers

      // Event handlers for select tags
      handleAgeChange = (e) => {
          let user_input = e.target.value;
          let FormData = {...this.state.formData}

          FormData.age = user_input;

          this.setState({
              formData: FormData,
              ageValue: user_input, // Updates the select tag value
          });
      }

      handleShirtSizeChange = (e) => {
          let user_input = e.target.value;
          let FormData = {...this.state.formData}

          FormData.shirt_size = user_input;

          this.setState({
            formData: FormData,
            shirtValue: user_input, // Updates the select tag value
          });
      }

      // Handle form submit
      handleFormSubmit = (e) => {
        e.preventDefault();

        // POST request via fetch
        const FORM_DATA = {...this.state.formData};
        console.log(FORM_DATA);
        console.log('BITCH');

        let postData = (url = `http:localhost:8080/form`, data = {...FORM_DATA}) => {
            return fetch(url, {
                method: "POST", // *GET, POST, PUT, DELETE, etc.
                mode: "cors", // no-cors, cors, *same-origin
                cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                credentials: "same-origin", // include, same-origin, *omit
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
                redirect: "follow", // manual, *follow, error
                referrer: "no-referrer", // no-referrer, *client
                body: JSON.stringify(data), // body data type must match "Content-Type" header
            })
            .then(response => response.json()); // parses response to JSON
        };

        // axios.post('/form', {
        //     guardian_name: data.guard_name,
        //     guardian_phone: data.guard_phone,
        //     guardian_email: data.guard_email,
        //     child_name: data.child_name,
        //     child_age: data.age,
        //     child_shirt_size: data.shirt_size
        // }).then((response) => {
        //     console.log(response.data.json());
        // }).catch((error) => {
        //     console.log(`Error:  ${error}`);
        // });
      }

      // Send form data to server via POST request
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
    //   }

    render() {
        return (
            <div className="signup-container">
                <form
                      onSubmit={this.handleFormSubmit}
                      className="signup-form">
        
                    <div>
                        <label htmlFor="guardian_name">Guardian's Full Name</label>
                        <input required
                               type="text"
                               name="guardian_name"
                               //value={this.state.formData.guard_name}
                               onChange={this.handleGuard_Name_Change}
                               placeholder=""/>
                    </div>
        
                    <div>
                        <label htmlFor="guardian_email">Guardian's Email</label>
                        <input required
                               type="email"
                               name="guardian_email"
                               //value={this.state.formData.guard_emai}
                               onChange={this.handleGuard_Email_Change}
                               placeholder="Email"/>
                    </div>
        
                    <div>
                        <label htmlFor="phone-number">Guardian's Phone Number</label>
                        <input required
                               type="text"
                               name="phone-number"
                               //value={this.state.formData.guard_phone}
                               onChange={this.handleGuard_Phone_Change}
                               placeholder="555-555-5555"/>
                    </div>
        
                    <div>
                        <label htmlFor="child_name">Child's Full Name</label>
                        <input required
                               type="text"
                               name="child_name"
                               //value={this.state.formData.child_name}
                               onChange={this.handleChild_Name_Change}
                               placeholder="Child's Full Name"/>
                    </div>
        
                    <select name="ages"
                            value={this.state.ageValue}
                            onChange={this.handleAgeChange}>
                        <option value="age" disabled >Age</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">9</option>
                        <option value="11">9</option>
                        <option value="12">9</option>
                    </select>
        
                    <select name="shirt-sizes"
                            value={this.state.shirtValue} 
                            onChange={this.handleShirtSizeChange}>
                        <option value="shirt" disabled>Shirt</option>
                        <option value="small">S</option>
                        <option value="medium">M</option>
                        <option value="large">L</option>
                    </select>
        
                    <input required
                           type="submit"
                           value="Submit"
                           className="submit-button"/>
                </form>
            </div>
          );

    }
}

export default SignupForm;
