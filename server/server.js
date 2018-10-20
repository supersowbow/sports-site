const express = require('express');
const router = require('./routes/routes.js');

const app = express();

// Parser to support URL-encoded bodies
// app.use(express.urlencoded({
//     extended: true,
//     inflate: true
// }));

app.use(express.json());

// Enable CORS Middleware
app.use((req, res, next) => {
    // Request origin(s) to allow
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    // Request header(s) to allow
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // Request method(s) to allow
    res.header('Access-Control-Allow-Methods', 'POST');
    next();
});

// Connect to Mongoose

// Enable routes
app.use('/', router);

// Serve static assets if in production
// if (process.env.NODE_ENV === 'production') {
//     // Set static folder
//     app.use(express.static('client/build'));
  
const port = process.env.PORT || 3005;
app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});