import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../models/Todo';
import { v4 as uuidv4 } from 'uuid';

const initialState = [] as Todo[];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<Todo>) => {
        return [...state, action.payload];
      },
      prepare: (description: string) => ({
        payload: {
          id: uuidv4(),
          description,
          completed: false,
        } as Todo,
      }),
    },

    removeTodo(state, action: PayloadAction<string>) {
      const index = state.findIndex((todo) => todo.id === action.payload);
      state.splice(index, 1);
    },

    editTodo(
      state,
      action: PayloadAction<{ description: string; id: string }>
    ) {
      const { id, description } = action.payload;
      const index = state.findIndex((todo) => todo.id === id);
      state[index].description = description;
    },

    setTodoStatus(
      state,
      action: PayloadAction<{ completed: boolean; id: string }>
    ) {
      const { id, completed } = action.payload;
      const index = state.findIndex((todo) => todo.id === id);
      state[index].completed = completed;
    },
  },
});

export const { addTodo, removeTodo, editTodo, setTodoStatus } =
  todoSlice.actions;

export default todoSlice.reducer;
