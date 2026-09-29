import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Products from "./Components/Products.jsx";
const Rou = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/Home", element: <Home /> },
      { path: "/Products", element: <Products /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={Rou} />
  </>,
);
