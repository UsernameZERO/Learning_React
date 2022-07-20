import React from "react";
import ReactDOM from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import "./index.css";
import App from "./components/App";
import movies from "./reducer";

const store = configureStore({
  reducer: {
    movie: movies,
  },
});
console.log("store", store);
console.log("STATE", store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
