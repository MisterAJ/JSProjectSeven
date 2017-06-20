'use strict';

// Please connect via localhost:8080

// Set up Express, Twit and Twit's Config file
const express = require('express');
const login = require(__dirname + '/config/config.js');
const twit = require(__dirname + '/data/twit.js');
const index = require('./routes/index');
const app = express();

// Set pug to control the view engine
app.set('view engine', 'pug');

// Set the template directory
app.set('views', __dirname + '/templates');


// Assign directory for static resources
app.use(express.static(__dirname + '/public'));

// Middleware to pull Twitter objects and assign to request keys
app.use((req, res, next) => {
    // Pulls User object from twitter for use in later requests
    const user = twit.getUser(login);

    // Users user object to request Twitter objects and assign to the request
    req.directMessages = twit.getDirectMessages(user);
    req.timelineTweets = twit.getTimeline(user);
    req.followingUsers = twit.getFollowing(user);
    next()
});


app.use("/", index);

// Start web server to listen on port 8080
app.listen(8080, function () {
    console.log('Frontend Server running on port 8080')
});









