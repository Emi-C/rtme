import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import Login from 'Login';

const LoginRoute = ({ exact, path, userId }) =>
  userId ? <Redirect to="/home" /> : <Route exact={exact} path={path} component={Login} />;

LoginRoute.defaultProps = {
  exact: false,
};

LoginRoute.propTypes = {
  exact: PropTypes.bool,
  path: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
};

export default LoginRoute;
