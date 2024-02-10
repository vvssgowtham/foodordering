import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";

const initialState = {
  cartItems: [],//localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // const itemIndex = state.cartItems.findIndex(
      //   (item) => item.id === action.payload.id
      // );

      // if (itemIndex >= 0) {
      //   state.cartItems[itemIndex].cartQuantity += 1;
      //   toast.info(`Increased ${state.cartItems[itemIndex].name} cart quantity`, {
      //     position: "bottom-left",
      //   });
      // } else {
        // const tempProduct = { ...action.payload, cartQuantity: 1 };



        const tempProduct = { ...action.payload};
        state.cartItems.push(tempProduct);
        toast.success(`${action.payload.name} added to cart`, {
          position: "bottom-left",
        });


        
      // }
      // localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const { addToCart } = cartSlice.actions;

export const addToCartAsync = (item, token) => async (dispatch) => {
  try {
    await axios.post(
      "http://localhost:5000/addtocart",
      { cartItems: [item] },
      {
        headers: {
          "x-token": token,
        },
      }
    );
    dispatch(addToCart(item));
  } catch (error) {
    console.error("Error adding items to cart:", error);
    toast.error("Error adding items to cart: ",error.message);
  }
};


export default cartSlice.reducer;
