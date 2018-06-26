import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigator from 'router/Navigator';
import PrivateRoute from './PrivateRoute';
import routes from './routes';

const AppRouter = () => (
  <React.Fragment>
    <Switch>
      {routes.map((route) => {
        if (route.private) {
          return (
            <PrivateRoute key={route.id} exact path={route.path} component={route.component} />
          );
        }
        return <Route key={route.id} exact path={route.path} component={route.component} />;
      })}
    </Switch>
    <Navigator />
  </React.Fragment>
);

export default AppRouter;
