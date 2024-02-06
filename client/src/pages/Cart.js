// Cart.js
import React, { useContext } from "react";
import { store } from "../App";
import { useNavigate } from "react-router-dom";
import "../css/cart.css";

function Cart() {
  const [token] = useContext(store);
  const navigate = useNavigate();

  // Redirect to login if token is not present
  if (!token) {
    navigate("/login");
    return null; // Add this to prevent rendering the rest of the component
  }

  return (
    <div className="cartContainer">
      <h1>Cart</h1>
    </div>
  );
}

export default Cart;
