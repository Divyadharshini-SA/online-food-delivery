// src/utils/axiosInstance.js

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000', // Use your API's localhost URL
  timeout: 10000, // Optional: set timeout
  headers: {
    'Content-Type': 'application/json',
    // Add any other default headers here
  },
});

export default axiosInstance;
