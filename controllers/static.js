/**
 * Created by krzysztof on 27.04.16.
 */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendfile('layouts/index.html');
});

module.exports = router;