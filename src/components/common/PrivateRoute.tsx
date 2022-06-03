import React from 'react';
import { Navigate } from 'react-router-dom';

export interface ProtectedRouteProps {
  isAuthenticated: boolean;
  authenticationPath: string;
  outlet: JSX.Element;
}

export default function PrivateRoute({
  isAuthenticated,
  authenticationPath,
  outlet,
}: ProtectedRouteProps) {
  if (isAuthenticated) {
    return outlet;
  } else {
    return <Navigate to={{ pathname: authenticationPath }} />;
  }
}
