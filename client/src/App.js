import React from "react";
import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Food from "./pages/Food";
import Cart from "./pages/Cart";

//we use createContext to store values
export const store = createContext();

function App() {
  const [token, setToken] = useState("");
  const [cartitems, setCart] = useState([]); // Ensure cart is initialized as an array

  return (
    <store.Provider value={[token, setToken, cartitems, setCart]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/food" element={<Food />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </store.Provider>
  );
}

export default App;
