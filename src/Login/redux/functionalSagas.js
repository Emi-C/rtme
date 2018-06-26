import { put, call } from 'redux-saga/effects';
import { authLogin } from 'Auth';
import actions from 'reduxUtils/actions';

export default function* authloginRequest() {
  yield put(actions.LOGIN.AUTH_LOGIN_REQUEST.create());
  try {
    yield call(authLogin);
    yield put(actions.LOGIN.AUTH_LOGIN_REQUEST_SUCCESS.create());
  } catch (err) {
    yield put(actions.LOGIN.AUTH_LOGIN_REQUEST_ERROR.create());
  }
}
