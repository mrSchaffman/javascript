/* eslint-disable no-param-reassign */
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

// the server App
const app = express();
const port = process.env.PORT || 3001;

// the Data source
const DATA_FILE = path.join(__dirname, 'db.json');

// setting up the server options
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    next();
});


// using the server api endpoint
app.get('/api/timers', (req, res) => {

    fs.readFile(DATA_FILE, (err, data) => {
        //console.log(data);
        res.json(JSON.parse(data));
    }
    );
});

app.listen({port}, () => {
    console.log(`Server running at: http://localhost:${port}/`); // eslint-disable-line no-console
});
