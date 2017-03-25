'use strict';

const express = require('express');
const Twit = require('twit');
const login = require(__dirname + '/config.js');

const T = new Twit(login);
const app = express();


app.set('view engine', 'pug');
app.set('views', __dirname + '/templates');

app.get('/', function (req, res) {
    res.send();
});

app.get('/:id', function (req, res) {
    const id = req.params.id;
    const post = json[id];
    res.send(post);
});

app.listen(80, function () {
    console.log('Frontend Server running on port 80')
});



