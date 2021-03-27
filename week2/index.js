'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./db');
const port = 3000;

app.use(express.urlencoded({extended: false}));
app.use('/cat', require('./route'));

db.on('connected', () => {
    app.listen(port, () => console.log(`Example app listening on port ${port}!`));
    console.log('wee');
}
);