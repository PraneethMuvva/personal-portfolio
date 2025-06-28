import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home";
import NoPage from "../pages/NoPage";

const Routes = () => {
  
  const routes = [
    {
        path: '/',
        element: <Home />,
    }, 
    {
        path: '*',
        element: <NoPage />,
    }
  ]

  return <RouterProvider router={createBrowserRouter(routes)} />;
}

export default Routes;