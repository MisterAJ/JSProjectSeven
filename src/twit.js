const Twit = require('twit');

function getUser(login) {
    return new Twit(login);
}

function getDirectMessages(user) {
    return user.get('direct_messages/sent', { screen_name: user.screen_name, count: 5 });
}

function getTimeline(user) {
    return user.get('statuses/user_timeline', { screen_name: user.screen_name, count: 5 });
}

function getFollowing(user) {
    return user.get('friends/list', { screen_name: user.screen_name , count: 5 });
}

module.exports.getUser = getUser;
module.exports.getDirectMessages = getDirectMessages;
module.exports.getTimeline = getTimeline;
module.exports.getFollowing = getFollowing;


