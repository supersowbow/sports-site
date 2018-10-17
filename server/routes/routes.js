const express = require('express');
const cors = require('cors');
//const bodyParser = require('body-parser');

//const app = express();
const router = express.Router();

// Bodyparser Middleware
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));
// create application/x-www-form-urlencoded parser
//const urlencodedParser = bodyParser.urlencoded({ extended: true });


// Config for CORS
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
    method: 'POST'
};

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
    //bodyParser.json();
    console.log(req.body);
    console.log(`Response Body:  ${res}`);
    //console.log(`Data Type:  ${typeof(req.body)}`);
    
    //console.log(`Request from client:  ${req.body}`);
    //console.log(`Response from server:  ${res.body}`);
    //const message = {success: "thank you"};
    //res.json(message);
});

module.exports = router;