const express = require('express');
const router = require('./routes/routes.js');
const bodyParser = require('body-parser');

const app = express();

app.use('/', router);
app.use(bodyParser);

app.get('/', (req, res) => {
    res.send("homes!!!");
});

const port = process.env.PORT || 3005;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});