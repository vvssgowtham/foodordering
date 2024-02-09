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


const cartSchema = new mongoose.Schema(
    {
        idValue : Number,
        image : String,
        name : String,
        price : Number,
        type : String
    }
)
//Creating Model
const UserData = mongoose.model('UserData', UserSchema);
const CartData = mongoose.model('CartData',cartSchema);

module.exports = {UserData,CartData};