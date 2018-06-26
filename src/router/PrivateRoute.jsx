import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ exact, path, component, userId, accessToken }) =>
  userId && accessToken ? (
    <Route exact={exact} path={path} component={component} />
  ) : (
    <Redirect to="/" />
  );

PrivateRoute.defaultProps = {
  exact: false,
};

PrivateRoute.propTypes = {
  exact: PropTypes.bool,
  path: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
  accessToken: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  userId: state.login.userId,
  accessToken: state.login.accessToken,
});

export default connect(
  mapStateToProps,
  null
)(PrivateRoute);
