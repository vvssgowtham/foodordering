// Cart.js
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../css/cart.css";

function Cart() {
  const [token,cart] = useContext(store);
  const navigate = useNavigate();

  // Redirect to login if token is not present
  if (!token) {
    navigate("/login");
    return null; // Add this to prevent rendering the rest of the component
  }

  return (
    <div className="cartContainer">
      <h1>Cart</h1>      
      <div className="cartCards">
        {cart.map((item, index) => (
          <div className="cartCard" key={index}>
            <img src={item.image} />
            <h3>{item.name}</h3>
            <h2>₹{item.price}</h2>
          </div>
        ))}
        </div>
    </div>
  );
}

export default Cart;
