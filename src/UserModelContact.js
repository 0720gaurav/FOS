const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
 
  fullname: String,
  email: String,
  phonenumber:Number,
  message:String
 
});

module.exports = mongoose.model('usercontact', UserSchema);