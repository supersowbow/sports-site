import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import router from './routes/routes.js';

import React, { Component } from 'react';
import { renderToString } from 'react-dom/server';
//import App from '../../client/src/App';

const app = express();

app.use(express.json());

// Serve requests with middleware Render function
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
const uri = process.env.DB_HOST;
const user = process.env.DB_USER;
const pass = process.env.DB_PASS;

mongoose.connect(
    `mongodb://${user}:${pass}@${uri}`,
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