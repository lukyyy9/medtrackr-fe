// axiosInstance.js
import axios from 'axios';
const currentProtocol = window.location.protocol;
const axiosInstance = axios.create({
  baseURL: currentProtocol+'//'+import.meta.env.VITE_BE_HOST
});

export default axiosInstance;