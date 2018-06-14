import React from 'react';
import Navigator from 'router/Navigator';
import Router from 'router';

import AuthHandler from './AuthHandler';

const App = () => (
  <React.Fragment>
    {AuthHandler()}
    <Navigator />
    <Router />
  </React.Fragment>
);

export default App;
