import {
  Login,
  Register,
  Todo
} from '../pages';
import { PrivateRoute } from './PrivateRoutes';
import { Route } from 'react-router-dom'
import React from 'react';

const routes = [
  { path: '/todo', element: <PrivateRoute><Todo /></PrivateRoute> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  { path: '*', element: <Login /> },
]

const buildRoutes = () => {
  return routes.map((route, index) => {
    return <Route path={route.path} element={route.element} />
  });
}

export default buildRoutes;