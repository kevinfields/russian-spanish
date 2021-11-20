import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserWordsContextProvider } from "./store/userwords-context";

ReactDOM.render(
  <UserWordsContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserWordsContextProvider>,
  document.getElementById("root")
);
