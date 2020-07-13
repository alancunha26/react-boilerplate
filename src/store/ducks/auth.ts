/**
|--------------------------------------------------
| Modules
|--------------------------------------------------
*/
import { AuthApi } from '../../api';
import { User, Credentials } from '../../utils/typescript';

/**
|--------------------------------------------------
| Action Types
|--------------------------------------------------
*/
export const Types = {
  SIGNIN_REQUEST: 'auth/SIGNIN_REQUEST',
  SIGNIN_SUCCESS: 'auth/SIGNIN_SUCCESS',
  SIGNIN_ERROR: 'auth/SIGNIN_ERROR',

  SIGNUP_REQUEST: 'auth/SIGNUP_REQUEST',
  SIGNUP_SUCCESS: 'auth/SIGNUP_SUCCESS',
  SIGNUP_ERROR: 'auth/SIGNUP_ERROR',

  LOGOUT_REQUEST: 'auth/LOGOUT_REQUEST',
} as const;

export interface SigninRequestActionType {
  type: typeof Types.SIGNIN_REQUEST;
  payload: Credentials;
}

export interface SigninErrorActionType {
  type: typeof Types.SIGNIN_ERROR;
  payload: any;
}

export interface SigninSuccessActionType {
  type: typeof Types.SIGNIN_SUCCESS;
  payload: { token: string; user: User };
}

export interface SignupRequestActionType {
  type: typeof Types.SIGNUP_REQUEST;
  payload: Credentials;
}

export interface SignupErrorActionType {
  type: typeof Types.SIGNUP_ERROR;
  payload: any;
}

export interface SignupSuccessActionType {
  type: typeof Types.SIGNUP_SUCCESS;
  payload: { token: string; user: User };
}

export interface LogoutRequestActionType {
  type: typeof Types.LOGOUT_REQUEST;
}

type AuthActionTypes =
  | SigninRequestActionType
  | SigninErrorActionType
  | SigninSuccessActionType
  | SignupRequestActionType
  | SignupErrorActionType
  | SignupSuccessActionType
  | LogoutRequestActionType;

/**
|--------------------------------------------------
| Action Creators
|--------------------------------------------------
*/
export const Creators = {
  /**
   * Signin action - enter in a user account
   */
  signin: (payload: Credentials): SigninRequestActionType => ({
    type: Types.SIGNIN_REQUEST,
    payload,
  }),

  /**
   * Signup action - creates a user account
   */
  signup: (payload: Credentials): SignupRequestActionType => ({
    type: Types.SIGNUP_REQUEST,
    payload,
  }),

  /**
   * Logout action - leave a user account
   */
  logout: (): LogoutRequestActionType => {
    // makes logout
    AuthApi.logout();

    // return the type
    return {
      type: Types.LOGOUT_REQUEST,
    };
  },
};

/**
|--------------------------------------------------
| Reducer
|--------------------------------------------------
*/
export interface AuthState {
  user?: User;
  token?: string;
  isLogged: boolean;
  isRegistering: boolean;
  isEntering: boolean;
  error?: any;
}

const initialState: AuthState = {
  user: AuthApi.getUser(),
  token: AuthApi.getToken(),
  isLogged: AuthApi.isLogged(),
  isRegistering: false,
  isEntering: false,
  error: null,
};

export default (state = initialState, action: AuthActionTypes): AuthState => {
  switch (action.type) {
    // Signup
    case Types.SIGNUP_REQUEST:
      return {
        ...state,
        isRegistering: true,
      };
    case Types.SIGNUP_SUCCESS:
      return {
        ...state,
        isLogged: true,
        isRegistering: false,
        ...action.payload,
      };
    case Types.SIGNUP_ERROR:
      return {
        ...state,
        isRegistering: false,
        error: action.payload,
      };

    // Signin
    case Types.SIGNIN_REQUEST:
      return {
        ...state,
        isEntering: true,
      };
    case Types.SIGNIN_SUCCESS:
      return {
        ...state,
        isLogged: true,
        isEntering: false,
        user: action.payload.user,
        token: action.payload.token,
      };
    case Types.SIGNIN_ERROR:
      return {
        ...state,
        isEntering: false,
        isLogged: false,
        error: action.payload,
      };

    case Types.LOGOUT_REQUEST:
      return {
        ...initialState,
        isLogged: false,
        token: undefined,
        user: undefined,
      };

    default:
      return {
        ...state,
      };
  }
};
