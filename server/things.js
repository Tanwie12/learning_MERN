var express = require('express');
var router = express.Router();
router.get('/mike', function(req, res){
res.send({name:'brun', age:20});
});
router.post('/', function(req, res){
    console.log(req.body)
res.send('POST route on things.');
});
//export this router to use in our index.js
module.exports = router;
