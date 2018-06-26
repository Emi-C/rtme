import { call, put, takeLatest } from 'redux-saga/effects';
import actions from 'reduxUtils/actions';
import { authInitRequest, authCheckRequest } from './functionalSagas';

function* bootstrap() {
  try {
    yield call(authInitRequest);
    yield call(authCheckRequest);
    yield put(actions.APP.BOOTSTRAP_SUCCESS.create());
  } catch (err) {
    yield put(actions.APP.BOOTSTRAP_ERROR.create());
    throw err;
  }
}

export default function* AppSaga() {
  yield takeLatest(actions.APP.BOOTSTRAP.type, bootstrap);
}
