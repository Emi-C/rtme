import { combineReducers } from 'redux';
import appReducer from 'App/redux/reducer';
import homeReducer from 'Home/redux/reducer';

const mainReducer = combineReducers({
  home: homeReducer,
  app: appReducer,
});

export default mainReducer;
