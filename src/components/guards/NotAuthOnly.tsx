import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';

interface Props {}

function NotAuthOnly() {
  let location = useLocation();

    if (localStorage.getItem('token')) {
      // Redirect them to the /login page, but save the current location they were
      // trying to go to when they were redirected. This allows us to send them
      // along to that page after they login, which is a nicer user experience
      // than dropping them off on the home page.
      return <Navigate to="/" state={{ from: location }} replace />;
    }
  
    return <Outlet></Outlet>;
  }

export default NotAuthOnly
