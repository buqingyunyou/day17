const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  user:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true,
  },
  register_date:{
    type:Date,
    default:Date.now()
  }
})

module.exports = mongoose.model('users',userSchema);