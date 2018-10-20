const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const keys = require('../keys/keys.js');

const router = express.Router();

// Connect to mongoose
const user = keys.user();
const dbp = keys.pss();
mongoose.connect(
    `mongodb://${user}:${dbp}@ds137003.mlab.com:37003/test-sports`,
    { useNewUrlParser: true }
);

// Get notified for successfull db connection or connection error
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log("WE CONNECTED HUNNY!!");
});


// Config for CORS
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
    method: 'POST'
};

/* ***********************ROUTES*********************** */

// route:  GET @ /form
// descript:  homepage
// access:  PRIVATE
router.get('/', (req, res) => {
    res.send("AYYYE, bitch!");
});

// route:  POST @ /form
// descript:  process the form data, validate data and save it in db
// access:  PRIVATE
// misc:  enable cors
router.post('/form', cors(corsOptions), (req, res) => {
    // figure out how to send nested objects to server
    console.log(req.body);
    console.log("Them kids: " + JSON.stringify(req.body.children));
    // Store guardian data in object
    guard_data = {
        guard_name: req.body.guard_name,
        guard_email: req.body.guard_email,
        guard_phone: req.body.guard_phone,
        children: [req.body.child_name],
    };

    // Store child data in object
    // Validate the guardian data with pre save hook
    // Validate the child data with pre save hook
    // Create guardian document
    // Create child document
    // save guardian to db
    // save child to db
    // send a json message of form data being saved



    res.send({body: "Thanks, from server.."});
    res.end();
    //res.status(200).json({ error: 'message' })
});
/* *******************END OF ROUTES************************/

module.exports = router;