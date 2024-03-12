const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const middleware = require("./middleware");

const mongoose = require("mongoose");
const { UserData, CartData } = require("./database");

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

// app.post("/addtocart", middleware, async (req, res) => {
//   const { cartItems } = req.body;
//   const userId = req.user.id;

//   try {
//     const user = await UserData.findById(userId);

//     if (!user) {
//       return res.status(400).json({ error: "User not found" });
//     }

//     // Check if the cart items already exist in the user's cart
//     const existingItems = user.cart.filter(item => cartItems.some(cartItem => cartItem.id === item.id && cartItem.quantity === item.quantity && cartItem.price === item.price && cartItem.name === item.name && cartItem.image === item.image && cartItem.category === item.category));

//     if (existingItems.length > 0) {
//       return res.status(400).json({ error: "Cart items already exist" });
//     }

//     // Assuming that the user's cart is an array of items
//     user.cart = [...user.cart, ...cartItems];

//     await user.save();

//     return res.status(200).json({ message: "Cart updated successfully" });
//   } catch (error) {
//     return res.status(400).json({ error: "Cart update failed" });
//   }
// });

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const exist = await UserData.findOne({ email });
    if (!exist) {
      return res.status(404).json({ message: "Invalid Email" });
    }
    const passkey = exist.password;
    if (passkey !== password) {
      return res.status(404).json({ message: "Incorrect Password" });
    }

    const payload = {
      user: {
        id: exist._id,
      },
    };

    jwt.sign(payload, "secretkey", async (req, token) => {
      if (!token) {
        return res.status(404).json({ message: "token not Generated" });
      }
      return res.status(200).json({ token: token });
    });
  } catch (e) {
    return res.status(500).json({ message: "loginError" });
  }
});

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
