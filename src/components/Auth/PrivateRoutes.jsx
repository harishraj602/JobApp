import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('token');

  if(!isAuthenticated){
     return <Navigate to={'/loginAuth'}/>
  }
  return children
};

export default PrivateRoutes;
