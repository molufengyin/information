const mongoose = require('mongoose');
const db = require('./db');
var userSchema = mongoose.Schema({
    name:String,
    isMale:Boolean,
    email:String,
    age:Number,
    class:String
})
var UserModel = mongoose.model('students',userSchema);
module.exports = UserModel;














