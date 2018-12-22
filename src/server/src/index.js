import express from 'express';
import mongoose from 'mongoose';
import router from './routes/routes';
import chalk from 'chalk';

const app = express();

app.use(express.json());

// Uncomment to enable CORS Middleware if front end and...
// back end source code are on two different servers

// app.use((req, res, next) => {
//     // Request origin(s) to allow
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//     // Request header(s) to allow
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     // Request method(s) to allow
//     res.header('Access-Control-Allow-Methods', 'POST');
//     next();
// });

// Store db environment variables into variables
const host = process.env.DB_HOST;
const dbName = process.env.DB_NAME;
const user = process.env.DB_USER;
const pass = process.env.DB_PASS;

// Create mongodb's Atlas uri string
const uri = `mongodb+srv://${user}:${pass}@${host}${dbName}`;

console.log(`THIS IS THE URI:  ${uri}`);

// Connect to Mongoose
mongoose.connect(uri, { useNewUrlParser: true });
// `mongodb+srv://${user}:${pass}@${host}${dbName}?retryWrites=true`,

// Get notified for successfull db connection or connection error
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log("WE CONNECTED HUNNY!!")
});

// Enable routes and put all API endpoints under '/api'
app.use(router);
  
const port = process.env.PORT || 3005;
app.listen(port, () => {
    console.log(chalk.green(`App is running:  http://localhost:${port}`));
});