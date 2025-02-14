import { Navigate } from 'react-router-dom'
import Home from '@/pages/home';
import Layout from '@/pages/layout';
import Login from '@/pages/login';
const routes = [
  {
    path: '/login',
    element:<Login />
  },
  {
    path: '/',
    element: <Navigate to='/login' />
  },
  {
    path: '/layout',
    element: <Layout />,
    children: [
      {
        path: '/layout/home',
        element: <Home />,
      },
    ],
  },

]

export default routes