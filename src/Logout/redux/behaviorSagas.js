import { call, put, takeLatest } from 'redux-saga/effects';
import actions from 'reduxUtils/actions';
import { authLogout } from 'Auth';

function* fbLogout() {
  try {
    yield call(authLogout);
    yield put(actions.LOGOUT.FBLOGOUT_SUCCESS.create()); //App reducer
  } catch (err) {
    yield put(actions.LOGOUT.FBLOGOUT_ERROR.create());
    throw err;
  }
}

export default function* LogoutSaga() {
  yield takeLatest(actions.LOGOUT.FBLOGOUT.type, fbLogout);
}
