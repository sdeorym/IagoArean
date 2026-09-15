import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import '@styles/index.css';
import App from "@pages/App";
import Home from "@pages/Home";
import About from "@pages/About"; 
import Portfolio from '@pages/Portfolio';
import Contact from '@pages/Contact';
import Error from '@pages/Error';

const router = createBrowserRouter([
  {
    path: "/", element: <App />,
    children: [
      {path:"", element: <Home />,},      
      {path: "about", element: <About />,},
      {
        path: "portfolio/", 
        element: <Portfolio />,
      },
      {path: "contact", element: <Contact />},
      {path: "error", element: <Error />,},
      {path: "*", element: <Error />,}
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);