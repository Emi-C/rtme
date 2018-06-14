import React from 'react';
import PrivateRoute from './PrivateRoute';
import { Switch, Route } from 'react-router-dom';

import routes from './routes';

const Router = () => (
  <Switch>
    {routes.map(
      (route) =>
        route.private ? (
          <PrivateRoute
            key={route.id}
            exact
            path={route.path}
            component={route.component}
            auth={localStorage.getItem('auth')}
          />
        ) : (
          <Route key={route.id} exact path={route.path} component={route.component} />
        )
    )}
  </Switch>
);

export default Router;
