import App from "App";
import { BrowserRouter } from "react-router-dom";
// Material Dashboard 2 React Context Provider
import { MaterialUIControllerProvider } from "context";
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <BrowserRouter>
    <MaterialUIControllerProvider>
      <App />
    </MaterialUIControllerProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
