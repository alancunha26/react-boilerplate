import { put, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { AuthApi } from '../../api';
import {
  Types,
  SignupRequestActionType,
  SigninRequestActionType,
} from '../ducks/auth';

// worker Saga: will be fired on SIGNUP_REQUEST actions
export function* watchSignup(action: SignupRequestActionType) {
  try {
    const payload = yield AuthApi.signup(action.payload);
    yield put({ type: Types.SIGNUP_SUCCESS, payload });
    yield put(push('/'));
  } catch (error) {
    yield put({ type: Types.SIGNUP_ERROR, error });
  }
}

// worker Saga: will be fired on SIGNIN_REQUEST actions
export function* watchSignin(action: SigninRequestActionType) {
  try {
    const payload = yield AuthApi.signin(action.payload);
    yield put({ type: Types.SIGNIN_SUCCESS, payload });
    yield put(push('/'));
  } catch (error) {
    yield put({ type: Types.SIGNIN_ERROR, payload: error });
  }
}

export default function* authSaga() {
  yield takeEvery(Types.SIGNUP_REQUEST, watchSignup);
  yield takeEvery(Types.SIGNIN_REQUEST, watchSignin);
}
