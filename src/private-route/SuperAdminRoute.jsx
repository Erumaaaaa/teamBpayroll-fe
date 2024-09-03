/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

const SuperAdminRoute = ({ element: Component, ...rest }) => {
  const storedUser = JSON.parse(localStorage.getItem('currentUser'));
  const isSuperAdmin = storedUser?.role === 'super-admin';

  if (!storedUser) {
    return <Navigate to="/login" replace/>
  }

  if (!isSuperAdmin) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Component {...rest} />;
};

SuperAdminRoute.propTypes = {
  element: PropTypes.elementType.isRequired,
};

export default SuperAdminRoute;
