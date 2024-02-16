var express = require('express');
var router = express.Router();

const postData=[
    { id: 1, title: 'Sample Post 1', content: 'This is the content of Sample Post 1' },
]
router.get('/',(req,res)=>{
    res.json(postData);
})

module.exports= router