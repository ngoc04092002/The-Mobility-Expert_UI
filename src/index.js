import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "swiper/css";

import { RouterProvider } from "react-router-dom";
import { router } from "./pages";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
