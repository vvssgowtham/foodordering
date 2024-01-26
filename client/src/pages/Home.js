import React from "react";
import "../css/Home.css";
import { MdDeliveryDining } from "react-icons/md";
import { useState } from "react";

const Home = () => {
  const [login, setLogin] = useState(false);
  return (
    <>
      <header>
        <nav>
          <div>
            <MdDeliveryDining
              style={{ fontSize: "2rem", marginRight: "1rem" }}
            />
            <a href="/">Home</a>
            <a href="/services">Services</a>
            <a href="/contact">Contact</a>
          </div>
          <div>
            <input type="text" placeholder="Search.." />
            {login ? (
              <>
                <button href="/">Logout</button>
              </>
            ) : (
              <>
                <button href="/signup">SignUp</button>
                <button href="/login">Login</button>
              </>
            )}
          </div>
        </nav>
        <hr />
        <div className="example">
          <div className="content">
            <h1>Food Delivery</h1>
            <p>
            Indulge in the Culinary Delights at Your Doorstep!<br/>
            Elevate Your Tastebuds with Our Seamless Food Delivery Experience.
            </p>
            <button>Order Now</button>
          </div>
          <div className="image">
            <img src="ScooterRide.gif" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Home;
