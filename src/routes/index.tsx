import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import NoPage from "../pages/NoPage";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "*", element: <NoPage /> },
    ],
  },
];

const Routes = () => <RouterProvider router={createBrowserRouter(routes)} />;

export default Routes;