import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";//from cart slice default reducer is Reducer

import App from "./App";

//we are configuring store because we want to access that particular state in our app
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
