const express=require('express');
const app=express();
const things=require('./things');
const todo=require('./todoserver')
const cors = require('cors')
const bodypaser=require('body-parser');
const User=require('./models/model')
var mongoose = require('mongoose');


app.use(cors())


app.use(bodypaser.json());

app.post('/mike',async(req,res,next )=>{
  const { username, password } = req.body;
 
  try {
    if(await User.findOne({username})){
      res.json("user exist");
      console.log("user exits")
    }else{
      const data= await User.create({username,password})
   res.json(data);
   console.log("created data");
    }
   
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).send('Internal Server Error');
  }
})

app.use('/things',things)
app.use('/todo',todo)


app.get('/without-cors', (req, res, next) => {
  res.json({ msg: 'ۘ no CORS, no party!' })
  })

  
  

/// mongoose connection
const mongoURI = 'mongodb://127.0.0.1:27017/todo';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
  

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});


app.listen(3001,()=>{
  console.log('express sever running on port ${port}');
})
