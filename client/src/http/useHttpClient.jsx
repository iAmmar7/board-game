import { useMemo } from 'react';
import axios from 'axios';

import { API_BASE_PATH } from '../utils/constants';

function useHttpClient() {
  return useMemo(() => {
    const axiosInstance = axios.create({});

    axiosInstance.interceptors.response.use(undefined, (error) => {
      return Promise.reject(error);
    });

    axiosInstance.interceptors.request.use((config) => {
      if (!API_BASE_PATH) return config;
      const url = `${API_BASE_PATH}/${config.url}`;
      return {
        ...config,
        url,
      };
    });

    return axiosInstance;
  }, []);
}

export default useHttpClient;
