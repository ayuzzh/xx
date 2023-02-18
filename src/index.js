import React from "react";
import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import RootPage from "./routes/root";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(

    <RouterProvider router={router} />

);
