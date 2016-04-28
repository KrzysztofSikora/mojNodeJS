/**
 * Created by krzysztof on 27.04.16.
 */



var Videos = require('/home/krzysztof/IdeaProjects/mojNodeJS/models/videos');
var router = require('express').Router()

//wyświetlanie GET

router.get('/api/videos', function (req, res, next) {
    Videos.find()
        .exec(function (err, videos) {
            if (err) {
                return next(err)
            }
            res.json(videos)
        })
})

//dodawanie POST

router.post('/api/videos', function (req, res, next) {
    var videos = new Videos({
        title: req.body.title,
        description: req.body.description
    });
    videos.save(function (err, videos) {
        if (err) {
            return next(err)
        }
        res.json(201, videos)

    })
})

// find by one by ID
router.get('/api/videos/:id', function (req, res, next) {
    Videos.findOne( {_id:req.params.id})
        .exec(function (err, videos) {
            if (err) {
                return next(err)
            }
            res.json(videos)
        })
})

// update by id PUT

router.put('/api/videos/:id', function (req, res, next) {
    Videos.update( 
        {
            _id:req.params.id
        }, 
        {
            title: req.body.title,
            description: req.body.description
        }
    )
        .exec(function (err, videos) {
            if (err) {
                return next(err)
            }
            res.json(videos)
        })
})


// delete by id

router.delete('/api/videos/:id', function (req, res, next) {
    Videos.remove( {_id:req.params.id})
        .exec(function (err, videos) {
            if (err) {
                return next(err)
            }
            res.json(videos)
        })
})

module.exports = router