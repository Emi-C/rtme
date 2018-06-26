import { combineReducers } from 'redux';
import appReducer from 'App/redux/reducer';
import homeReducer from 'Home/redux/reducer';
import loginReducer from 'Login/redux/reducer';

const mainReducer = combineReducers({
  home: homeReducer,
  app: appReducer,
  login: loginReducer,
});

export default mainReducer;
