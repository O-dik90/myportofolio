import App from "App";
import { HashRouter } from "react-router-dom";
import { MaterialUIControllerProvider } from "context";
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <HashRouter>
      <MaterialUIControllerProvider>
        <App />
      </MaterialUIControllerProvider>
    </HashRouter>
    {/* </BrowserRouter> */}
  </React.StrictMode>,
  document.getElementById("root")
);
