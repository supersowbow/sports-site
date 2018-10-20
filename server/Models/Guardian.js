const mongoose = require('mongoose');
const Child = require('./Child.js');
const keys = require('../keys/keys.js');

// Save child schema
const childSchema = Child.childSchema;

// Validate Name
function nameValidator (guardian_name) {
    // something
}

// Validate Email
function emailValidator (guardian_email) {
    const emailre = keys.emailRE();
    return emailre.test(guardian_email);
}

// Validate Phone
function phoneValidator (guardian_phone) {
    const phonere = /\d{3}-\d{3}-\d{4}/;
    return phonere.test(guardian_phone);
}


// Create Guardian Schema
// Fields:  name, email, phone number, children id
const guardianSchema = new mongoose.Schema({
    guardian_name: { 
        type: String, 
        required: true,
        validator: nameValidator(this.guardian_name) 
    },

    guardian_email: { 
        type: String, 
        required: true,
        validator: emailValidator(this.guardian_email) 
    },

    guardian_phone: { 
        type: Number, 
        required: true,
        validator: phoneValidator(this.guardian_phone) 
    },

    children: [childSchema],

    submissionDate: { 
        type: Date, 
        default: Date.now 
    }
});

// Create Guardian Model
const Guardian = mongoose.model('Guardian', guardianSchema);

module.exports = Guardian;