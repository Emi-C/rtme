import { call, put, takeLatest } from 'redux-saga/effects';
import actions from 'reduxUtils/actions';
import { authCheck, authLogin } from 'Auth';

function* bootstrap() {
  try {
    const authData = yield call(authCheck);
    console.log(authData);
    yield put(
      actions.LOGIN.BOOTSTRAP_SUCCESS.create({
        accessToken: authData.authResponse.accessToken,
        userId: authData.authResponse.userID,
      })
    );
  } catch (err) {
    yield put(actions.LOGIN.BOOTSTRAP_ERROR.create());
    console.log(err);
  }
}

function* fbLogin() {
  try {
    yield call(authLogin);
    const authData = yield call(authCheck);
    console.log(authData);
    yield put(
      actions.LOGIN.FBLOGIN_SUCCESS.create({
        accessToken: authData.authResponse.accessToken,
        userId: authData.authResponse.userID,
      })
    );
  } catch (err) {
    yield put(actions.LOGIN.FBLOGIN_ERROR.create());
    throw err;
  }
}

export default function* LoginSaga() {
  yield takeLatest(actions.LOGIN.BOOTSTRAP.type, bootstrap);
  yield takeLatest(actions.LOGIN.FBLOGIN.type, fbLogin);
}
