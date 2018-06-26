import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Link, NavLink } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Navigator from './Navigator';
import routes from './routes';

const AppRouter = (props) => (
  <React.Fragment>
    {props.userId && <Link to="/logout">logout</Link>}
    <Switch>
      {routes.map((route) => {
        if (route.private) {
          return (
            <PrivateRoute
              userId={props.userId}
              key={route.id}
              exact
              path={route.path}
              component={route.component}
            />
          );
        }
        return <Route key={route.id} exact path={route.path} component={route.component} />;
      })}
    </Switch>
    {props.userId && (
      <NavLink to="/settings" activeClassName="active">
        settings
      </NavLink>
    )}
    {props.userId && <Navigator />}
  </React.Fragment>
);

AppRouter.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default AppRouter;
