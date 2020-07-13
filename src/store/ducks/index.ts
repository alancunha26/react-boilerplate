/**
|--------------------------------------------------
| Libs
|--------------------------------------------------
*/
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';

/**
|--------------------------------------------------
| Personal Reducers
|--------------------------------------------------
*/
import auth, { AuthState } from './auth';

export interface RootState {
  router: any;
  auth: AuthState;
}

export default (history: History) =>
  combineReducers({
    // External reducers
    router: connectRouter(history),

    // My reducers
    auth,
  });
