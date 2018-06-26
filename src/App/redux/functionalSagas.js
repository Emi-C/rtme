import { put, call } from 'redux-saga/effects';
import { authInit, authCheck } from 'Auth';
import actions from 'reduxUtils/actions';

export function* authInitRequest() {
  yield put(actions.APP.AUTH_INIT_REQUEST.create());
  try {
    yield call(authInit);
    yield put(actions.APP.AUTH_INIT_REQUEST_SUCCESS.create({ fbInit: true }));
  } catch (err) {
    yield put(actions.APP.AUTH_INIT_REQUEST_ERROR.create());
  }
}

export function* authCheckRequest() {
  yield put(actions.APP.AUTH_CHECK_REQUEST.create());
  try {
    const authData = yield call(authCheck);
    console.log(authData);
    yield put(
      actions.APP.AUTH_CHECK_REQUEST_SUCCESS.create({
        accessToken: authData.authResponse.accessToken,
        userId: authData.authResponse.userID,
      })
    );
  } catch (err) {
    yield put(actions.APP.AUTH_CHECK_REQUEST_ERROR.create());
  }
}
