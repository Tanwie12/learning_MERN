// userModel.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  // Add other fields as needed
});
const todoSchema = new mongoose.Schema({
    name: String,
    key:String
   
    // Add other fields as needed
  });

const User = mongoose.model('User', userSchema);
const todo = mongoose.model('todo', todoSchema);


module.exports = User;
module.exports=todo;
