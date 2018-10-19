const express = require('express');
const cors = require('cors');

const router = express.Router();

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
    console.log(req.body);
    res.json({ user: 'tobi' });

    res.format({
        'application/json': function() {
          res.send({ message: 'Thanks, from server...' });
        }
    });
});
/* *******************END OF ROUTES************************/

module.exports = router;