import React from 'react';
import { NavLink } from 'react-router-dom';

import routes from './routes';

const Navigator = () => {
  if (window.location.pathname !== '/') {
    return routes.map((route) => (
      <div key={route.id} className="menuLink">
        <NavLink to={route.path} activeClassName="active">
          {route.navText}
        </NavLink>
      </div>
    ));
  }
};

export default Navigator;
