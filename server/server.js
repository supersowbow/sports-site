const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/routes.js');
const config = require('./config/credentials.js');

const app = express();

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
const user = config.user();
const dbp = config.pss();
mongoose.connect(
    `mongodb://${user}:${dbp}@ds137003.mlab.com:37003/test-sports`,
    { useNewUrlParser: true }
);

// Get notified for successfull db connection or connection error
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log("WE CONNECTED HUNNY!!")
});

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