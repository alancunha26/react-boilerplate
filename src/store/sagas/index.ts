/**
|--------------------------------------------------
| Effects
|--------------------------------------------------
*/
import { fork, all } from 'redux-saga/effects';

/**
|--------------------------------------------------
| Sagas
|--------------------------------------------------
*/
import authSaga from './auth';

export default function* rootSaga() {
  yield all([fork(authSaga)]);
}
