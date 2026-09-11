import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import '@styles/index.css';
import App from "@pages/App";
import Home from "@pages/Home";
import About from "@pages/About"; 
import Portfolio from '@pages/Portfolio';
import PortfolioIndex from '@projects/PortfolioIndex';
import Obis from '@projects/Obis';
import Obos from '@projects/Obos';
import Atl from '@projects/Atl';
import Memoires from '@projects/Memoires';
import Demon from '@projects/Demon';
import Varios from '@projects/Varios';
import VariosIndex from '@projects/Misc/VariosIndex';
import Domos from '@projects/Misc/Domos';
import Wild from '@projects/Misc/Wild';
import Conchas from '@projects/Misc/Conchas';
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
        children: [
          {index: true, element: <PortfolioIndex />},
          {path: "obis", element: <Obis />},
          {path: "obos", element: <Obos />},
          {path: "atl", element: <Atl />},
          {path: "memoires", element: <Memoires />},
          {path: "demon", element: <Demon />},
          {
            path: "varios/", 
            element: <Varios />,
            children: [
              {index: true, element: <VariosIndex />},
              {path: "domos", element: <Domos />},
              {path: "wild", element: <Wild />},
              {path: "conchas", element: <Conchas />},
            ]
          },
        ]
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