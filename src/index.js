import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";

// Rendering code here

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(<App />);
