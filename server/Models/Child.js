const mongoose = require('mongoose');


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

// Create Schema for Children 
// Fields:  name, age, shirt size, guardian key (or id)

const childSchema = new mongoose.Schema({
    child_name: { 
        type: String, 
        required: true,
        validator: nameValidator(this.guardian_name)  
    },

    child_age: { 
        type: Number, 
        required: true,
        validator: nameValidator(this.guardian_name)  
    },

    shirt_size: { 
        type: String, 
        required: true,
        validator: nameValidator(this.guardian_name)  
    },

    guardian_id: { 
        type: Schema.Types.ObjectId, 
        ref: 'Guardian',
        required: true
    }
});

// Create a Child Model
const Child = mongoose.model('Child', childSchema);

module.exports = Child;