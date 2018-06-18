import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import LoginRoute from './LoginRoute';
import routes from './routes';

const Router = (props) => (
  <Switch>
    {routes.map((route) => {
      if (route.private) {
        return (
          <PrivateRoute
            key={route.id}
            exact
            path={route.path}
            component={route.component}
            userId={props.userId}
          />
        );
      }
      return route.login ? (
        <LoginRoute key={route.id} exact path={route.path} userId={props.userId} />
      ) : (
        <Route key={route.id} exact path={route.path} component={route.component} />
      );
    })}
  </Switch>
);

Router.propTypes = {
  userId: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  userId: state.app.userId,
});

export default connect(
  mapStateToProps,
  null
)(Router);
