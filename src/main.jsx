import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./page/Home";
import AboutUs from "./page/AboutUs";
import Contact from "./page/Contact";
import NotFound from "./page/NotFound"; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home/>, 
      },
      {
        path: "/about",
        element: <AboutUs />, 
      },
      {
        path: "/contact",
        element: <Contact/>, 
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
