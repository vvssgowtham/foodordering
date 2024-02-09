import React, { useContext } from "react";
import { useState } from "react";
import "../css/biryani.css";
import { Data } from "../utils/food";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { store } from "../App";

function Food() {
  const navigate = useNavigate();
  const dispatch = useDispatch();//we need dispatche for dispatching the action to the reducer.

  const [token] = useContext(store);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));//This is just passing of product to the another page.
  }

  return (
    <div className="foodContainer">
      <u>
        <h1 onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
          Biryani's
        </h1>
      </u>
      <div className="foodCards">
        {Data.filter((item) => item.type === "biryani").map((item, index) => (
          <div className="foodCard" key={index}>
            <img src={item.image} />
            <h3>{item.name}</h3>
            <h2>₹{item.price}</h2>
            <div className="buttons">
              {token ? (
                <button onClick={() => handleAddToCart(item)}>
                  Add to Cart
                </button>
              ) : (
                <button onClick={() => alert("Log In to add to Cart")}>
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Food;
