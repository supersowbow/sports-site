import express from 'express';
//import fs from 'fs';
import path from 'path';
import mongoose from 'mongoose';
//import React, { Component } from 'react';
//import ReactDOMServer from 'react-dom/server';
import router from './routes/routes.js';
import config from '../config/credentials.js';
//import App from '../client/src/App.js';



// function handleRender(req, res) {
//     // Renders App component into an HTML string
//     const html = ReactDOMServer.renderToString(<App />);
  
//     // Load contents of index.html
//     fs.readFile('./index.html', 'utf8', function (err, data) {
//       if (err) throw err;
  
//       // Inserts the rendered React HTML into our main div
//       const doc = data.replace(/<div id="root"><\/div>/, `<div id="root">${html}</div>`);
  
//       // Sends the response back to the client
//       res.send(doc);
//     });
// }
  

const app = express();

app.use(express.json());

// Serve built files with static files middleware
//app.use('/build', express.static(path.join(__dirname, 'build')));

// Serve requests with our handleRender function
//app.get('*', handleRender);

// Serve static files from the React app
//app.use(express.static(path.join(__dirname, 'client/build')));
//app.use(express.static('../client/build'));

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

// Enable routes and put all API endpoints under '/api'
app.use(router);

// ENABLE EXPRESS TO SERVE REACT BUILD FOLDER

// Serve static assets if in production (This may not be needed since build folder is already being served above)
// if (process.env.NODE_ENV === 'production') {
//     // Set static folder
//     app.use(express.static('client/build'));
// Add this to use the build files?  path.join(__dirname+'/client/build/index.html')
  
const port = process.env.PORT || 3005;
app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});