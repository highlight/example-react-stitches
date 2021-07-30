import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { H } from "highlight.run";

H.init("31ep3qdn", {
  environment: "production",
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
