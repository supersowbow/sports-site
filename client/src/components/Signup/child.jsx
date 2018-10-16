import React from 'react';

import './child.css';

const Child = () => {
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
                <input required
                       id="child_name"
                       type="text"
                       className="child-name"
                       name="child_name"/>
                <label htmlFor="child_name"
                       className="child-label">
                       Child's Full Name
                </label>
            </div>
            <div className="select-buttons-container">
                <select name="age" required className="ages">
                    <option selected disabled>Age</option>
                    <option value="seven">7</option>
                    <option value="eight">8</option>
                    <option value="nine">9</option>
                    <option value="ten">10</option>
                    <option value="eleven">11</option>
                    <option value="twelve">12</option>
                </select>
                    <select name="shirt-size" className="shirt-sizes" required>
                    <option selected disabled>Size</option>
                    <option value="small">S</option>
                    <option value="medium">M</option>
                    <option value="large">L</option>
                </select>
            </div>
        </div>
    );
};

export default Child;
