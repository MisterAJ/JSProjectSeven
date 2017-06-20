const app = require('express');
const router = app.Router();

// Get handler for the main page
router.get('/', function (req, res) {
    let p1 = req.timelineTweets;
    let p2 = req.directMessages;
    let p3 = req.followingUsers;

    Promise.all([p1,p2,p3]).then(values => {
        res.render('../templates/index.pug',
            {
                timeline: values[0].data,
                following: values[2].data.users,
                messages: values[1].data
            })
    });
});

module.exports = router;