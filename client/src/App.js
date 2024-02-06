import "react-toastify/dist/ReactToastify.css";//used for the toast notification in the application(means when we add the product to the cart it will show the notification)

import React, { useEffect } from "react";
import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Food from "./pages/Food";
import Cart from "./pages/Cart";

//we use createContext to store values
export const store = createContext();

function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      setToken(token);
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("token", token);
  }, [token]);

  return (
    <store.Provider value={[token, setToken]}>
      <BrowserRouter>
        <ToastContainer />
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
