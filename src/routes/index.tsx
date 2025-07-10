import { RouterProvider, createBrowserRouter } from "react-router";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import NoPage from "../pages/NoPage";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/About", element: <About /> },
      { path: "/Portfolio", element: <Portfolio /> },
      { path: "/Contact", element: <Contact /> },
      { path: "*", element: <NoPage /> },
    ],
  },
];

const Routes = () => <RouterProvider router={createBrowserRouter(routes)} />;

export default Routes;