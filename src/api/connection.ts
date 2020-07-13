import axios from 'axios';
import Cookies from 'js-cookie';
import { API_URL, TOKEN_KEY } from '../utils/constants';

export const connection = axios.create({
  /**
   * Api options
   */
  baseURL: API_URL,

  /**
   * headers
   */
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    // Authorization:
    //   'Bearer ' + Cookies.get(process.env.REACT_APP_ACESS_TOKEN_KEY),
  },
});

/**
 * Format request
 */
connection.interceptors.request.use(
  (request) => {
    const token = Cookies.get(TOKEN_KEY);

    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }

    return request;
  },
  (error) => {
    if (error.response && error.response.data) {
      return Promise.reject(error.response.data);
    }

    return Promise.reject(error);
  }
);

export default connection;
