// src/api/axiosInstance.ts
import axios, {AxiosError} from 'axios';
import {BASE_API_URL} from '../configs/Const';

const TIMEOUT = 60000; // Thời gian timeout cho mỗi request (60 giây)

const axiosInstance = axios.create({
  baseURL: BASE_API_URL,
  timeout: TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: Thêm interceptors để attach token
axiosInstance.interceptors.request.use(
  async config => {
    // Lấy token từ localStorage / AsyncStorage / zustand / context
    //const token = await getAccessToken(); // viết riêng hàm này
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  error => Promise.reject(error)
);

// Optional: handle lỗi toàn cục
axiosInstance.interceptors.response.use(
  response => response,
  (error: AxiosError) => {
    // Handle lỗi như: 401, 500,...
    if (error.response?.status === 401) {
      console.log('Hết phiên đăng nhập, đăng xuất người dùng...');
      // logout(), clearToken(), navigate login...
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
