import { all } from 'redux-saga/effects';
import AppSaga from 'App/redux/behaviorSagas';
import HomeSaga from 'Home/redux/behaviorSagas';
import LoginSaga from 'Login/redux/behaviorSagas';
import LogoutSaga from 'Logout/redux/behaviorSagas';

export default function* sagas() {
  yield all([HomeSaga(), AppSaga(), LoginSaga(), LogoutSaga()]);
}
