import axios from 'axios';
import { ApiConfig } from 'constants/apiConfig';
import { useQuery } from 'react-query';
import { Routes } from './requestRoutes';

const client = axios.create({
  baseURL: ApiConfig.baseURL,
});

export const Request = (options: string, data?: any) =>
  client({
    ...Routes[options],
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
    data,
  }).then((res) => res.data);

export const UseRequest = (
  queryOptions: string[],
  options: string,
  data?: any
) => {
  console.log('use request');
  return useQuery(queryOptions, () => Request(options, data));
};
