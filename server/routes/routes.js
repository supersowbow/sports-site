const express = require('express');

const router = express.Router();

// route:  GET @ /form
// descript:  homepage
// access:  PRIVATE
router.get('/', (req, res) => {
    res.send("AYYYE, bitch!");
});

// route:  POST @ /form
// descript:  process the form data and save it in db
// access:  PRIVATE
router.post('/form', (req, res) => {
    res.send("Thanks for the submission, bitch!");
    console.log(req.body);
});

module.exports = router;