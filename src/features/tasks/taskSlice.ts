import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTasksAPI } from './taskAPI';
import {type Task } from './types';

interface TaskState {
  items: Task[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: TaskState = {
  items: [],
  status: 'idle',
  error: null,
};

export const fetchTasks = createAsyncThunk<
  Task[],
  void,
  { rejectValue: string }
>('tasks/fetchTasks', async (_, { rejectWithValue }) => {
  try {
    return await fetchTasksAPI();
  } catch {
    return rejectWithValue('Failed to fetch tasks');
  }
});

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload ?? 'Error';
      });
  },
});

export default taskSlice.reducer;