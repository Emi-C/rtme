import { call, put, takeLatest } from 'redux-saga/effects';
import actions from 'reduxUtils/actions';
import { authLogout } from 'Auth';

function* fbLogout() {
  try {
    const logoutResponse = yield call(authLogout);
    console.log(logoutResponse);
    yield put(actions.LOGOUT.FBLOGOUT_SUCCESS.create());
  } catch (err) {
    yield put(actions.LOGOUT.FBLOGOUT_ERROR.create());
    throw err;
  }
}

export default function* LogoutSaga() {
  yield takeLatest(actions.LOGOUT.FBLOGOUT.type, fbLogout);
}
