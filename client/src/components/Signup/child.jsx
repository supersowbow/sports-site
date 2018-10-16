import React from 'react';

import './child.css';

const Child = (props) => {
    return (
        <div className="child-entry-container">
            <div className="note">
                <p>Add/ Remove a child.</p>
            </div>
            <div className="add-remove-buttons">
                <button className="increment">+</button>
                <button className="decrement">x</button>
            </div>
            <div className="child-field">
                <input name="child_name"
                       required
                       className="child-name"
                       type="text"
                       id="child_name"
                       onChange={props.handleChildChange}/>
                <label htmlFor="child_name"
                       className="child-label">
                       Child's Full Name
                </label>
            </div>
            <div className="select-buttons-container">
                <select name="age" 
                        required 
                        className="ages"
                        value={props.ageValue}
                        onChange={props.handleAgeChange}>
                    <option disabled>Age</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                </select>
                <select name="shirt-size" 
                        required 
                        className="shirt-sizes" 
                        value={props.shirtValue}
                        onChange={props.handleShirtSizeChange}>
                    <option disabled>Size</option>
                    <option value="small">S</option>
                    <option value="medium">M</option>
                    <option value="large">L</option>
                </select>
            </div>
        </div>
    );
};

export default Child;
