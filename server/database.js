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
        id : {
            type : Number,
            required : true
        },
        image : {
            type : String,
            required : true
        },
        name : {
            type : String,
            required : true
        },
        price : {
            type : Number,
            required : true
        },
        category : {
            type : String,
            required : true
        },
        user : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'UserData',
            required : true
        }
    }
)
//Creating Model
const UserData = mongoose.model('UserData', UserSchema);
const CartData = mongoose.model('CartData',cartSchema);

module.exports = {UserData,CartData};