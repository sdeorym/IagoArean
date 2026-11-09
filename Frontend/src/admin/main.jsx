import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import '@styles/index.css';
import { DataProvider } from "../context/DataContext";
import '@fontsource-variable/inter';
import App from '@admin/App';
import Admin from '@admin/Admin';
import Login from '@admin/Login';
import Endpoint from '@admin/Endpoint';

const router = createBrowserRouter([
  {
    path: "/", element: <App />,
    children: [
      {index: true, element: <Admin />},     
      {path: "login/", element: <Login />},
      {path: ":endpoint", element: <Endpoint />},
      /*{path: "error", element: <Error />,},
      {path: "*", element: <Error />,}*/
    ],
  },
],  { basename: "/admin" });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  </React.StrictMode>
);