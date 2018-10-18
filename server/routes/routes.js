const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const router = express.Router();

// Config for CORS
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
    method: 'POST'
};

// Log each request to the console
router.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

/* ***********************ROUTES*********************** */

// route:  GET @ /form
// descript:  homepage
// access:  PRIVATE
router.get('/', (req, res) => {
    res.send("AYYYE, bitch!");
});

// route:  POST @ /form
// descript:  process the form data and save it in db
// access:  PRIVATE
// misc:  enable cors
router.post('/form', cors(corsOptions), (req, res) => {
    const reqBody = JSON.stringify(req.body);
    console.log(`Request Body:  ${reqBody}`);
    //bodyParser.json();
    //console.log(`Request Body:  ${req.body}`);
    res.json({msg: "thank you for your submission"});
    //console.log(message);
});
/* *******************END OF ROUTES************************/

module.exports = router;