import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import store from "./store.js";
import Main from "./containers/Main.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "properties",
      },
      {
        path: "dashboard",
      },
      {
        path: "addProperty",
      },
      {
        path: "profile",
      },
      {
        path: "agent-teams",
      },
      {
        path: "customers",
      },
      {
        path: "community",
      },
      {
        path: "property/:property_id",
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
  
)
