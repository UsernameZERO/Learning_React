import React from "react";
import ReactDOM from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";

import "./index.css";
import App from "./components/App";
import movies from "./reducer";

const store = configureStore({
  reducer: {
    movies: movies,
  },
});
console.log("store", store);
// console.log("Before STATE", store.getState());

// store.dispatch({
//   type: "ADD_MOVIES",
//   movies: [{ name: "superman" }],
// });

// console.log("After STATE", store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);
