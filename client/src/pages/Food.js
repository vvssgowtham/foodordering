import React, { useContext } from "react";
import { useState } from "react";
import "../css/biryani.css";
import { Data } from "../utils/food";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCartAsync } from "../features/cartSlice";
import { store } from "../App";

function Food() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [token] = useContext(store);

  const handleAddToCart = async (item) => {
    dispatch(addToCartAsync(item, token));
  };

  return (
    <div className="foodContainer">
      <u>
        <h1 onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
          Biryani's
        </h1>
      </u>
      <div className="foodCards">
        {Data.filter((item) => item.category === "biryani").map((item, index) => (
          <div className="foodCard" key={index}>
            <img src={item.image} alt={item.name} />
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
