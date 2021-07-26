const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    // cartTotal, price,title,count
  cartTotal: String,
  price: String,
  title: { type: String, required: true },
  count: { type: String, required: true },
  username: String,
  phonenumber : String,
  address : String
  //team: String
});

module.exports = mongoose.model('usercart', UserSchema);