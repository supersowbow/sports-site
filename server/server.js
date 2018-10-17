const express = require('express');
const router = require('./routes/routes.js');
const bodyParser = require('body-parser');

const app = express();

// Enable CORS Middleware
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    
    next();
});

// Bodyparser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
  
// Error handler
app.use(function(err, req, res) {
    // set locals, only providing error in development
    //err ? res.locals.message = err.message : null;
    //res.locals.message = err.message;
    //console.log(res.locals.message);
    //res.locals.error = req.app.get('env') === 'development' ? err : {};
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
    console.log(`Example app listening on port ${port}!`);
});