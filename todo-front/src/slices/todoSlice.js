import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:3000/v1/tasks';

export const fetchTodos = createAsyncThunk('todo/fetchTodos', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const addTodo = createAsyncThunk('todo/addTodo', async (todo) => {
  const response = await axios.post(API_URL, todo);
  return response.data;
});

export const updateTodo = createAsyncThunk('todo/updateTodo', async (todo) => {
  const response = await axios.put(`${API_URL}/${todo.id}`, todo);
  return response.data;
});

export const deleteTodo = createAsyncThunk('todo/deleteTodo', async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

const initialValue = {
  filterStatus: 'all',
  todoList: [],
  status: 'idle',
  error: null,
};




export const todoSlice = createSlice({
  name: 'todo',
  initialState: initialValue,
  reducers: {
    updateFilterStatus: (state, action) => {
      state.filterStatus = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.todoList = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.todoList.push(action.payload);
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        const index = state.todoList.findIndex(todo => todo.id === action.payload.id);
        if (index !== -1) {
          state.todoList[index] = action.payload;
        }
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.todoList = state.todoList.filter(todo => todo.id !== action.payload);
      });
  },
});

export const { updateFilterStatus } = todoSlice.actions;
export default todoSlice.reducer;
