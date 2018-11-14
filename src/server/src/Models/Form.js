const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema for Children 
// Fields:  name, age, shirt size, guardian key (or id)

const childSchema = new mongoose.Schema({
    child_name: { 
        type: String, 
        required: true,
        //validator: nameValidator(this.guardian_name)  
    },

    child_age: { 
        type: Number, 
        required: true,
        //validator: nameValidator(this.guardian_name)  
    },

    shirt_size: { 
        type: String, 
        required: true,
        //validator: nameValidator(this.guardian_name)  
    },

    guardian_id: { 
        type: Schema.Types.ObjectId, 
        ref: 'Guardian',
        required: true
    }
});

// Create Guardian Schema
// Fields:  name, email, phone number, children id
const guardianSchema = new mongoose.Schema({
    guardian_name: { 
        type: String, 
        required: true,
        //validator: nameValidator(this.guardian_name) 
    },

    guardian_email: { 
        type: String, 
        required: true,
        //validator: emailValidator(this.guardian_email) 
    },

    guardian_phone: { 
        type: Number, 
        required: true,
        //validator: phoneValidator(this.guardian_phone) 
    },

    children: [childSchema],

    submissionDate: { 
        type: Date, 
        default: Date.now 
    }
});

// Create a Child Model and Guardian Model
const Child = mongoose.model('Child', childSchema);
const Guardian = mongoose.model('Guardian', guardianSchema);

module.exports = { Child, Guardian };