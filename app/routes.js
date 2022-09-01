const express = require('express')
const router = express.Router()

var request = require('then-request');

// Add your routes here - above the module.exports line
router.get('/where-you-live', function(req, res) {
    request('GET', 'http://localhost:9000/boards')
    .getBody()
    .then(text => JSON.parse(text))
    .then(postJson => {
        res.render('where-you-live.html', {
            localities: postJson
        }) 
    })
})


module.exports = router
