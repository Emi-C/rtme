import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const LoginRoute = ({ exact, path, component, userId }) =>
  userId ? <Redirect to="/home" /> : <Route exact={exact} path={path} component={component} />;

LoginRoute.defaultProps = {
  exact: false,
};

LoginRoute.propTypes = {
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
)(LoginRoute);
