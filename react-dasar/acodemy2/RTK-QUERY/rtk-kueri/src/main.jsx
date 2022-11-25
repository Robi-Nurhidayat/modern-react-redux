import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ApiProvider } from "@reduxjs/toolkit/query/react";

import apiSlice from "./app/features/apiSlice";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApiProvider api={apiSlice}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApiProvider>
);
