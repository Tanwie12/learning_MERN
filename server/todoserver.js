var express = require('express');
var router = express.Router();
const todo = require('./models/model');

router.delete('/delete/:key', async (req, res) => {
    

    const {  key } = req.params;
    const data = await todo.deleteMany({  key }); // Use deleteMany for deleting multiple documents
    console.log(data);
    res.json(data); // Send the response (optional)
});

router.get('/find', async (req, res) => {

    const { name, key } = req.body;
    const data = await todo.find({}); // Use find to get all documents
    res.json(data);
  
});

router.put('/update', async (req, res) => {
    console.log(req.body);
    const { name, key } = req.body;
    const data = await todo.findOneAndUpdate({name,key}); // Use find to get all documents
    res.json(data);
    console.log(data);
});

router.post('/post', async (req, res) => {

    const { name, key } = req.body;
    const data = await todo.create({ name, key });
    
    res.send('POST route on things.');
});

// Export this router to use in our index.js
module.exports = router;
