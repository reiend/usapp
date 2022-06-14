import React from "react";
import ReactDOM from "react-dom";
import Element from "@libs/reiend/js/element.js";
import App from "./App.js";

const app = Element()
  .createElement("div")
  .init();
Element()
  .queryElement("body")
  .appendChild(app);

ReactDOM.render(<App />, app);
