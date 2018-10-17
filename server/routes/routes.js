const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

// Bodyparser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// create application/x-www-form-urlencoded parser
//const urlencodedParser = bodyParser.urlencoded({ extended: true });


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
// descript:  process the form data and save it in db
// access:  PRIVATE
// misc:  enable cors
router.post('/form', cors(corsOptions), (req, res) => {
    console.log(res.body);
    console.log(`Response Body:  ${res}`);
    res.end();
});
/* *******************END OF ROUTES************************/

/*  Something for nodemon; leave it here.
    Without the line below, nodemon will produce this statement:
    "[nodemon] clean exit - waiting for changes before restart"
*/
process.on('SIGUSR2', () => { process.exit(0); });

module.exports = router;