import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import BestBooks from "./api";

const bestBooks = new BestBooks(process.env.REACT_APP_BESTBOOKS_API_KEY);

ReactDOM.render(
  <React.StrictMode>
    <App bestBooks={bestBooks} />
  </React.StrictMode>,
  document.getElementById("root")
);
