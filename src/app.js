'use strict';

const express = require('express');
const login = require(__dirname + '/config.js');
const twit = require(__dirname + '/twit.js');

const app = express();

app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
    const user = twit.getUser(login);
    req.directMessages = twit.getDirectMessages(user);
    req.timelineTweets = twit.getTimeline(user);
    req.followingUsers = twit.getFollowing(user);
    next()
});

app.set('view engine', 'pug');
app.set('views', __dirname + '/templates');

app.get('/', function (req, res) {
    res.render(__dirname + '/templates/index.pug');
    console.log(req.timelineTweets);
});

app.listen(80, function () {
    console.log('Frontend Server running on port 80')
});


