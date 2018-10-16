const express = require('express');

const router = express.Router();

// router.use((req, res, next) => {
//     console.log("This is the router.use shit");
//     next();
// });

// process the form (POST http://localhost:5000/form)
router.post('/form', (req, res) => {
    res.send("Thanks for the submission, bitch!");
    console.log(req.body);
});

module.exports = router;