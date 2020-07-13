import jwt from 'jsonwebtoken';
import Cookies from 'js-cookie';
import axios from '../connection';
import { Credentials, User } from '../../utils/typescript';
import { TOKEN_KEY, USER_KEY } from '../../utils/constants';

/**
 * Verify if user is logged in
 */
// export const isLogged = () => !!Cookies.get(TOKEN_KEY);
export const isLogged = () => true;

/**
 * Get the current user token
 */
export const getToken = () => Cookies.get(TOKEN_KEY);

/**
 * Get the user fields with the current token
 */
export function getUser(): User | undefined {
  const user = jwt.decode(Cookies.get(USER_KEY) || '') as User;
  return user;
}

/**
 * Logout the account in the current browser
 */
export const logout = () => {
  Cookies.remove(USER_KEY);
  Cookies.remove(TOKEN_KEY);
};

/**
 * Create an account in the api
 */
export const signup = async (data: Credentials) => {
  const response = await axios.post('/signin', data);

  if (response.data.token) {
    Cookies.set(TOKEN_KEY, response.data.token);
  }

  return response;
};

/**
 * Login into an account
 */
export const signin = async (data: Credentials) => {
  const response = await axios.post('signup', data);

  if (response.data.token) {
    Cookies.set(TOKEN_KEY, response.data.token);
  }

  return response;
};
