import React from "react";
import { store } from "../App";
import "../css/biryani.css";
import { Data } from "../utils/food";

function Food() {
  return (
    <div className="foodContainer">
      <u>
        <h1>Biryani's</h1>
      </u>
      <div className="foodCards">
        {Data.filter((item) => item.type === "biryani").map((item, index) => (
          <div className="foodCard" key={index}>
            <img src={item.image} />
            <h3>{item.name}</h3>
            <h2>₹{item.price}</h2>
            <div className="buttons">
              <button>
                Add to Cart
              </button>
              <button>Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Food;
