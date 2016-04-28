/**
 * Created by krzysztof on 27.04.16.
 */

var db = require('/home/krzysztof/IdeaProjects/mojNodeJS/db.js');

// var Videos = db.model('Videos', {
//     username: { type: String, required: true },
//     body: { type: String, required: true },
//     date: { type: Date, required: true, default: Date.now }
//
// });

var Videos = db.model('Videos', {
    title: { type: String, required: true},
    description: { type: String, required: true}

});

module.exports = Videos;