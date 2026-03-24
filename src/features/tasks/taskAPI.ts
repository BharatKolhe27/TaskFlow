import axiosInstance from '../../services/axiosInstance';
import { retry } from '../../utils/retry';
import type{ Task } from './types';

export const fetchTasksAPI = async (): Promise<Task[]> => {
  return retry(async () => {
    const res = await axiosInstance.get<Task[]>('/todos?_limit=10');
    return res.data;
  });
};