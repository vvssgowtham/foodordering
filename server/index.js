const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
import {User} from "./database";

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//connecting to database
mongoose.connect('mongodb://127.0.0.1:27017/foodUsers',{useNewUrlParser: true});

app.post("/signup", async (req,res) => {
})

app.listen(5000, () => {
    console.log('Server listening on port 5000');
})