import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = (props) =>
  props.auth ? (
    <Route key={props.key} exact={props.exact} path={props.path} component={props.component} />
  ) : (
    <Redirect to="/" />
  );

export default PrivateRoute;
