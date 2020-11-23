import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Youtube from "./service/Youtube";

const youtube = new Youtube("AIzaSyAxNgduyWImNd4HCSX2nunB2YQmrZkKlTY");

ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>,
  document.getElementById("root")
);
