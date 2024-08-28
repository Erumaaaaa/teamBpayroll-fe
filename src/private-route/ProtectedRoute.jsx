/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const storedUser = JSON.parse(localStorage.getItem('currentUser'));

  if (!storedUser) {
    // Jika pengguna belum login, arahkan ke halaman login
    return <Navigate to="/login" replace />;
  }

  return <Component {...rest} />;
};

ProtectedRoute.propTypes = {
  element: PropTypes.elementType.isRequired,
};

export default ProtectedRoute;
