import { useContext} from "react";
import "../css/biryani.css";
import { Data } from "../utils/food";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { store } from "../App";
import { addToCart } from "../features/cartSlice";

function Food() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [token] = useContext(store);

  const handleAddToCart = async (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="foodContainer">
      <u>
        <h1 onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
          Biryani's
        </h1>
      </u>
      <div className="foodCards">
        {Data.filter((product) => product.category === "biryani").map((product, index) => (
          <div className="foodCard" key={index}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <h2>₹{product.price}</h2>
            <div className="buttons">
              {token ? (
                <button onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              ) : (
                <button onClick={() => alert("Log In to add to Cart")}>
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Food;
