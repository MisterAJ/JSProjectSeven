'use strict';

const express = require('express');
const Twit = require('twit');
const login = require(__dirname + '/config.js');

const T = new Twit(login);
const app = express();


app.set('view engine', 'pug');
app.set('views', __dirname + '/templates');

app.get('/', function (req, res) {
    res.render(__dirname + '/templates/index.pug')
});

app.get('/:id', function (req, res) {
    res.send('this');
});

app.listen(80, function () {
    console.log('Frontend Server running on port 80')
});



