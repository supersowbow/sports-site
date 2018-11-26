import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import router from './routes/routes';
import serverRenderer from './middleware/serverRenderer';
import chalk from 'chalk';

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

// Serve in PRODUCTION
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('build'));
    app.get('*', (req, res) => {
        res.sendFile('build/index.html');
    });

} else { 

// Serve in DEVELOPMENT
    const clientBuildPATH = path.resolve(__dirname, '../', '../', 'client/build');
    // root (/) should always serve our server rendered page
    // router.use('^/$', serverRenderer);
    
    // app.use(express.static(clientBuildPATH));
    // app.use('^/$', serverRenderer);
    console.log('DEVELOPMENT');
}
// Serve
app.use('^/$', serverRenderer);

// Enable routes and put all API endpoints under '/api'
app.use(router);
  
const port = process.env.PORT || 3005;
app.listen(port, () => {
    console.log(chalk.green(`App is running:  http://localhost:${port}`));
});