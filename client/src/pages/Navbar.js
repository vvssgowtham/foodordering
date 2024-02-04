import React from "react";
import { useEffect } from "react";
import { MdDeliveryDining } from "react-icons/md";
import "../css/nav.css";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { useContext } from "react";
import { store } from "../App";

function Navbar() {
  const [token, setToken] = useContext(store);
  const navigate = useNavigate();

  useEffect(() => console.log(`Token : ${token}`), [token]);

  return (
    <>
      <nav>
        <div>
          <MdDeliveryDining style={{ fontSize: "2rem", marginRight: "1rem" }} />
          <a href="/">Home</a>
          <a href="#part2">Popular</a>
          <a href="#section3">About</a>
          <div className="dropdown">
            <a href="#part4" className="dropbtn">
              Categories&#9662;
            </a>
            <div className="dropdown-content">
              <a href="/food">
                <u>Soup's</u>
              </a>
              <a href="/food">
                <u>Starter's</u>
              </a>
              <a href="/food">
                <u>Biryani's</u>
              </a>
              <a href="/food">
                <u>Desert's</u>
              </a>
            </div>
          </div>
        </div>
        <div>
          <input type="text" placeholder="Search.." />
          {token ? (
            <>
              <button
                onClick={() => {
                  setToken("");
                  navigate("/");
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button onClick={() => navigate("/signup")}>SignUp</button>
              <button onClick={() => navigate("/login")}>Login</button>
            </>
          )}
          <ShoppingCartIcon
            className="icon"
            style={{ fontSize: "2rem" }}
            onClick={() => navigate("/cart")}
          >
          </ShoppingCartIcon>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
