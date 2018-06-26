import { call, put, takeLatest } from 'redux-saga/effects';
import actions from 'reduxUtils/actions';
import { authInit } from 'Auth';

function* bootstrap() {
  try {
    yield call(authInit);
    yield put(
      actions.APP.BOOTSTRAP_SUCCESS.create({
        fbInit: true,
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
