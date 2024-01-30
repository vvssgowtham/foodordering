const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
const {UserData} = require("./database")

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//connecting to database
mongoose.connect("mongodb://127.0.0.1:27017/foodUsers", {
  useNewUrlParser: true,
});

app.post("/signup", async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    
    try {
        const exist = await UserData.findOne({ email });
        if (exist) {
            return res.status(400).json({ error: "Email already taken" });
        }

        const user = new UserData({ firstName, lastName, email, password });
        await user.save();
        return res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        return res.status(400).json({ error: "Registration failed" });
    }
});

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
