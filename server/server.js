const express = require('express');
const router = require('./routes/routes.js');
const bodyParser = require('body-parser');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// Connect to Mongoose

// Enable routes
app.use('/', router);

// Serve static assets if in production
// if (process.env.NODE_ENV === 'production') {
//     // Set static folder
//     app.use(express.static('client/build'));
  
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});