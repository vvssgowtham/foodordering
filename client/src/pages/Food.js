import React from "react";
import { store } from "../App";
import { useContext } from "react";
import "../css/biryani.css";
import { Data } from "../utils/food";
import { useNavigate } from "react-router-dom";

function Food() {
  const navigate = useNavigate();

  const [cartitems, setCart] = useContext(store);

  return (
    <div className="foodContainer">
      <u>
        <h1 onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
          Biryani's
        </h1>
      </u>
      <div className="foodCards">
        {Data.filter((item) => item.type === "biryani").map((item, index) => (
          <div className="foodCard" key={index}>
            <img src={item.image} />
            <h3>{item.name}</h3>
            <h2>₹{item.price}</h2>
            <div className="buttons">
              <button
                onClick={() => {
                  setCart([
                    ...cartitems,
                    { name: item.name, image: item.image, price: item.price },
                  ]);
                  alert("Item Added to Cart");
                }}
              >
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
