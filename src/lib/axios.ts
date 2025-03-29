import { env } from '@/env';
import axios from 'axios';

export const api = axios.create({
  baseURL: env.VITE_API_URL,
  withCredentials: true,
  timeout: 10000, // 10 seconds
});

if(env.VITE_API_REQUEST_DELAY){
  api.interceptors.request.use(async (config) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    return config
  })
}