import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../features/tasks/taskSlice';
import type{ RootState, AppDispatch } from '../app/store';

export const useTasks = () => {
  const dispatch = useDispatch<AppDispatch>();
  const tasks = useSelector((state: RootState) => state.tasks);

  return {
    ...tasks,
    fetchTasks: () => dispatch(fetchTasks()),
  };
};