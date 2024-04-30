import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import AuthContextProvider from "./context/AuthContext.jsx";
import ThemeContextProvider from "./context/ThemeContext.jsx";
import "./index.css";
import router from "./routes/MainRouter.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ThemeContextProvider>
        <RouterProvider router={router} />
      </ThemeContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
