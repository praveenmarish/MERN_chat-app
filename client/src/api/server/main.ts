import axios from 'axios';
import { ApiConfig } from 'constants/apiConfig';
import { Routes } from './requestRoutes';

const client = axios.create({
  baseURL: ApiConfig.baseURL,
});

export const Request = (options: string, data?: any) =>
  client({
    ...Routes[options],
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
    data,
  });
