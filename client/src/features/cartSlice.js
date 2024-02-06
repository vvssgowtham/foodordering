import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";//this is for the toast notification in the application.

const initialState = {
  cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      //here we are checking if the product is already in the cart or not
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      //if we have product or item in the cart
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.info(`increased ${state.cartItems[itemIndex].name} cart quantity`, {
            position: "bottom-left",
        })
      }
      //if we dont have product or item in the cart
      else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        toast.success(`${action.payload.name} added to cart`, {
            position: "bottom-left",
        })
      }

      //we will be setting out the items as json objects in the local storage so that when we refresh the page the items will be there in the cart.
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
