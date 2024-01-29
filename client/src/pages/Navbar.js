import React from "react";
import { useState } from "react";
import { MdDeliveryDining } from "react-icons/md";
import "../css/nav.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();

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
              <a href="/soup"><u>Soup's</u></a>
              <a href="/starter"><u>Starter's</u></a>
              <a href="/biryani"><u>Biryani's</u></a>
              <a href="/desert"><u>Desert's</u></a>
            </div>
          </div>
        </div>
        <div>
          <input type="text" placeholder="Search.." />
          {login ? (
            <>
              <button onClick={() => navigate("/")}>Logout</button>
            </>
          ) : (
            <>
              <button onClick={() => navigate("/signup")}>SignUp</button>
              <button onClick={() => navigate("/login")}>Login</button>
            </>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
