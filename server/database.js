const mongoose = require('mongoose');

//creating Schema
const UserSchema = new mongoose.Schema(
    {
        firstName : {
            type: String,
            required : true
        },
        lastName : {
            type : String,
            required : true
        },
        email : {
            type : String,
            required : true,
            unique : true
        },
        password : {
            type : String,
            required : true
        }
    }
)

//Creating Model
const UserData = mongoose.model('UserData', UserSchema);

module.exports = {UserData};