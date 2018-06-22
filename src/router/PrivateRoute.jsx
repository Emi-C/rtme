import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ exact, path, component, userId }) =>
  userId ? <Route exact={exact} path={path} component={component} /> : <Redirect to="/" />;

PrivateRoute.defaultProps = {
  exact: false,
};

PrivateRoute.propTypes = {
  exact: PropTypes.bool,
  path: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  userId: state.app.userId,
});

export default connect(
  mapStateToProps,
  null
)(PrivateRoute);
