const Twit = require('twit');

function getUser(login) {
    return new Twit(login);
}

function getDirectMessages(user) {
    let directMessagesSent = user.get('direct_messages/sent', { screen_name: user.screen_name, count: 5 },  function (err, data, response) {
        return response;
    });
    let directMessages = user.get('direct_messages', { screen_name: user.screen_name, count: 5 },  function (err, data, response) {
        return response;
    });
}

function getTimeline(user) {
    return user.get('statuses/user_timeline', { screen_name: user.screen_name, count: 5 },  function (err, data, response) {
        console.log(response);
        return response;
    });
}

function getFollowing(user) {
    let following = user.get('friends/list', { screen_name: user.screen_name , count: 5 },  function (err, data, response) {
        return response;
    });
}

module.exports.getUser = getUser;
module.exports.getDirectMessages = getDirectMessages;
module.exports.getTimeline = getTimeline;
module.exports.getFollowing = getFollowing;


