const mongoose = require('mongoose');

//creating Schema
const UserSchema = new mongoose.Schema(
    {
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
const User = mongoose.model('UserData', UserSchema);

module.exports({User});