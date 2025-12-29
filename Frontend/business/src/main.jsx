import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from "./App";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import About from "./Components/Aboutus";
import Login from "./Components/Login";
import Register from "./Components/Register";
import ServiceDetails from "./Components/ServiceDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    children: [
      { index: true, element: <Home /> }, 
      { path: "services", element: <Services /> },
      { path: "about", element: <About /> },
      { path: "projects", element: <Projects /> },
      { path: "contact", element: <Contact /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "/services/:serviceName", element: <ServiceDetails /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
