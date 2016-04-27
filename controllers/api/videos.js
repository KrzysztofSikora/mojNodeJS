/**
 * Created by krzysztof on 27.04.16.
 */



var Videos = require('/home/krzysztof/IdeaProjects/mojNodeJS/models/videos');
var router = require('express').Router()


router.get('/api/videos', function (req, res, next) {
    Videos.find()
        .exec(function (err, videos) {
            if (err) {
                return next(err)
            }
            res.json(videos)
        })
})


module.exports = router