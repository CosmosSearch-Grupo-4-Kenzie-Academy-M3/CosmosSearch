import React from "react";
import ReactDOM from "react-dom/client";

import { Reset, GlobalStyle } from "./styles/global";

// import { BrowserRouter } from "react-router-dom"
import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Reset/>
    <GlobalStyle/>
    {/* <BrowserRouter> */}
      <App />
    {/* </BrowserRouter> */}
  </React.StrictMode>
);
