import appActions from 'App/redux/actions';
import homeActions from 'Home/redux/actions';
import createActions from './actionsUtils';

const actions = {
  HOME: createActions('HOME', homeActions),
  APP: createActions('APP', appActions),
};

export default actions;
