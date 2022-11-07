import React from "react";
import { Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export const PrivateRoute = (props) => {
  const [cookies, setCookie] = useCookies();

  if (cookies.token)
    return props.children

  return <Navigate to='/login' replace />
}