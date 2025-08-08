import React from "react";
import ReactDOM from "react-dom/client";
import "./utils/styles/main.scss";
import "./i18n";
import Layout from "./Layout";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);
