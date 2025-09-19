import { RouterProvider, createBrowserRouter, Navigate } from 'react-router';
import Layout from '../pages/Layout';
import HomePage from '../pages/HomePage';

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/home', element: <Navigate to="/" replace /> },
      { path: '/about', element: <Navigate to="/" replace /> },
      { path: '/portfolio', element: <Navigate to="/" replace /> },
      { path: '/contact', element: <Navigate to="/" replace /> },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
];

const Routes = () => <RouterProvider router={createBrowserRouter(routes)} />;

export default Routes;
