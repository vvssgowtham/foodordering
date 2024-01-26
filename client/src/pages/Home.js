import React from "react";
import "../css/Home.css";
import { MdDeliveryDining } from "react-icons/md";
import { useState } from "react";
import popular from "../utils/data";

import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

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
            <a href="#part2">Yummy</a>
            <a href="#part3">About</a>
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
              Indulge in the Culinary Delights at Your Doorstep!
              <br />
              Elevate Your Tastebuds with Our Seamless Food Delivery Experience.
            </p>
            <button>Order Now</button>
          </div>
          <div className="image">
            <img src="ScooterRide.gif" />
          </div>
        </div>
        <hr />
        <div className="section2" id="part2">
          <div className="popular">
            <h1>
              <u>Popular Dishes</u>
            </h1>
            <p>
              "Savor the Flavor, Embrace the Popular! Explore a Culinary
              Symphony with Our Signature Dishes – Where Every Bite Tells a
              Delicious Tale."
            </p>
          </div>

          <div className="cards">
            {popular.map((item) => {
              return (
                <div className="card" key={item.id}>
                  <div className="card-image">
                    <img src={item.image} />
                  </div>
                  <div className="card-text">
                    <h2>
                      <a href="/food">{item.title}</a>
                    </h2>
                    <p>{item.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </header>
      <hr />
      <footer id="part3">
        <div className="footerContainer">
          <div className="popular">
            <h1>
              <u>Lightening Fast</u>
            </h1>
            <p>
              "Indulge in the Culinary Delights at Your Doorstep! Elevate Your
              Tastebuds with Our Seamless Food Delivery Experience."
            </p>
          </div>
          <div className="footerbox">
            <div className="social">
              <FaXTwitter />
              <a href="https://twitter.com/vvssgowtham">Twitter</a>
            </div>
            <div className="social">
              <FaLinkedin />
              <a href="https://www.linkedin.com/in/vvssgowtham/">LinkedIn</a>
            </div>
            <div className="social">
              <AiFillInstagram />
              <a href="https://www.instagram.com/i.am_vvss/">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
