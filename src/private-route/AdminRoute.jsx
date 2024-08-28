/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ element: Component, ...rest }) => {
  const storedUser = JSON.parse(localStorage.getItem('currentUser'));
  const isAdmin = storedUser?.role === 'admin';

  if (!isAdmin) {
    return <Navigate to="/dashboard" state={{ fromAdminRoute: true }} />;
  }

  return <Component {...rest} />;
};

AdminRoute.propTypes = {
  element: PropTypes.elementType.isRequired,
};

export default AdminRoute;
