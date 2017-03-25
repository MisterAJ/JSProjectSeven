'use strict';

const json = {
    "point": "40.266044,-74.718479",
    "homeTeam":"Lawrence Library",
    "awayTeam":"LUGip",
    "markerImage":"images/red.png",
    "information": "Linux users group meets second Wednesday of each month.",
    "fixture":"Wednesday 7pm",
    "capacity":"",
    "previousScore":""
};

const express = require('express');

const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/templates');

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/:id', function (req, res) {
    const id = req.params.id;
    const post = json[id];
    res.send(post);
});

app.listen(8080, function () {
    console.log('Frontend Server running on port 8080')
});