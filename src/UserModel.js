const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  dateofbirth: String,
  _id: { type: String, required: true },
  password: { type: String, required: true },
  confirmPassword : String,
  //team: String
});

module.exports = mongoose.model('user', UserSchema);