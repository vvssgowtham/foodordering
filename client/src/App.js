import React from "react";
import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Biryani from "./pages/Biryani";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

//we use createContext to store values
export const store = createContext();

function App() {
  const [token, setToken] = useState("");
  //inorder to send token to all the components present we make use of provider in contextApi
  
  return (
    <store.Provider value={[token,setToken]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/biryani" element={<Biryani />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </store.Provider>
  );
}

export default App;
