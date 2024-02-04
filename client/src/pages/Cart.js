import React, { useEffect } from "react";
import { store } from "../App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [cartitems] = useContext(store);
  const [token] = useContext(store);

  const navigate = useNavigate();

  if(!token){
    navigate("/login");
  }

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cartitems.map((item, index) => (
          <li key={index}>
            {item.name} - ₹{item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
