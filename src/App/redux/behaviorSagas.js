import { call, put, takeLatest } from 'redux-saga/effects';
import actions from 'reduxUtils/actions';
import { authInit, authCheck } from 'Auth';

function* bootstrap() {
  try {
    yield call(authInit);
    const authData = yield call(authCheck);
    console.log(authData);
    yield put(
      actions.APP.BOOTSTRAP_SUCCESS.create({
        fbInit: true,
        accessToken: authData.authResponse.accessToken,
        userId: authData.authResponse.userID,
      })
    );
  } catch (err) {
    yield put(actions.APP.BOOTSTRAP_ERROR.create());
    throw err;
  }
}

export default function* AppSaga() {
  yield takeLatest(actions.APP.BOOTSTRAP.type, bootstrap);
}
