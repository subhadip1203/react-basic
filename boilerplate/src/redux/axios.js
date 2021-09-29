import axios from 'axios';
import store from './store';

// axios for no auth header
const NoAuthAxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL, // 'https://jsonplaceholder.typicode.com', //
});
NoAuthAxiosInstance.defaults.timeout = 5000;

// axios with auth header
const AuthAxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL, // 'https://jsonplaceholder.typicode.com', //
});
AuthAxiosInstance.defaults.timeout = 5000;

const listener = () => {
  const token = JSON.stringify(store.getState().company);
  console.log(token);
  AuthAxiosInstance.defaults.headers.common.Authorization = token;
};
store.subscribe(listener);

export default { NoAuthAxiosInstance, AuthAxiosInstance };
