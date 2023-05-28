import React from "react";
import App from "./App";
import * as ReactDOMClient from "react-dom/client";

const rootNode = document.createElement("div");
rootNode.id = "root";
document.body.appendChild(rootNode);
const root = ReactDOMClient.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
