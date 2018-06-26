import { call, put, takeLatest } from 'redux-saga/effects';
import actions from 'reduxUtils/actions';
import { authCheckRequest } from 'App/redux/functionalSagas';
import authLoginRequest from './functionalSagas';

function* bootstrap() {
  try {
    yield call(authCheckRequest);
    yield put(actions.LOGIN.BOOTSTRAP_SUCCESS.create());
  } catch (err) {
    yield put(actions.LOGIN.BOOTSTRAP_ERROR.create());
    throw err;
  }
}

function* fbLogin() {
  try {
    yield call(authLoginRequest);
    yield call(authCheckRequest);
    yield put(actions.LOGIN.FBLOGIN_SUCCESS.create());
  } catch (err) {
    yield put(actions.LOGIN.FBLOGIN_ERROR.create());
    throw err;
  }
}

export default function* LoginSaga() {
  yield takeLatest(actions.LOGIN.BOOTSTRAP.type, bootstrap);
  yield takeLatest(actions.LOGIN.FBLOGIN.type, fbLogin);
}
