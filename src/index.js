import App from "App";
import { BrowserRouter } from "react-router-dom";
import { MaterialUIControllerProvider } from "context";
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MaterialUIControllerProvider>
        <App />
      </MaterialUIControllerProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
