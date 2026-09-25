import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import '@styles/index.css';
import { DataProvider } from "./context/DataContext"

import App from "@pages/App";
import Home from "@pages/Home";
import About from "@pages/About"; 
import Portfolio from '@pages/Portfolio';
import Projects from '@pages/Projects';
import Contact from '@pages/Contact';
import Error from '@pages/Error';

const router = createBrowserRouter([
  {
    path: "/", element: <App />,
    children: [
      {path:"", element: <Home />,},      
      {path: "about", element: <About />,},
      {path: "portfolio/", element: <Portfolio />,
        children: [
          { path: ":slug", element: <Projects /> }]
      },
      {path: "contact", element: <Contact />},
      {path: "error", element: <Error />,},
      {path: "*", element: <Error />,}
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  </React.StrictMode>
);