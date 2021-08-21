import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todoSlice';

export const store = configureStore({
  reducer: todosReducer,
});

export type Dispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
