const express = require('express')
const router = express.Router()

var request = require('then-request');

// Add your routes here - above the module.exports line
router.get('/where-you-live', function(req, res) {
    request('GET', 'http://localhost:9000/boards').done( boardsRes => {
        res.render('where-you-live.html', {
            boards: boardsRes.getBody(),
            testData: "Some test data",
            testArray: [
                "firstElement",
                "secondElement",
                "thirdElement"
            ]
        })
    })
})

module.exports = router
