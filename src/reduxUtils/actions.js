import appActions from 'App/redux/actions';
import homeActions from 'Home/redux/actions';
import loginActions from 'Login/redux/actions';
import logoutActions from 'Logout/redux/actions';
import createActions from './actionsUtils';

const actions = {
  HOME: createActions('HOME', homeActions),
  APP: createActions('APP', appActions),
  LOGIN: createActions('LOGIN', loginActions),
  LOGOUT: createActions('LOGOUT', logoutActions),
};

export default actions;
