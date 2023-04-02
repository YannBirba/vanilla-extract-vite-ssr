import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { HeadProvider } from "react-head";

ReactDOM.hydrateRoot(
  document.getElementById("root") as HTMLElement,
  <React.StrictMode>
    <HeadProvider>
      <App />
    </HeadProvider>
  </React.StrictMode>
);
