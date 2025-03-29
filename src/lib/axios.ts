import { env } from '@/env';
import axios from 'axios';

export const api = axios.create({
  baseURL: env.VITE_API_URL,
  withCredentials: true,
  timeout: 10000, // 10 seconds
});