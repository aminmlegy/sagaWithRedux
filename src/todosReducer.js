import { createSlice } from "@reduxjs/toolkit";

const todoReducer = createSlice({
  name: "todoReducer",
  initialState: {
    todos: [],
    isLoading: false,
    eror: null,
  },
  reducers: {
    fetchTodosStart: (state, action) => {
      state.isLoading = true;
      state.eror = null;
    },
    fetchTodosSuccess: (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
    },
    fetchTodosFailed: (state, action) => {
      state.isLoading = false;
      state.eror = action.payload;
    },
    addItem: (state, action) => {
      state.isLoading = false;
      state.todos.push(action.payload);
    },
    updateLastTodoId: (state, action) => {
      const todoId = action.payload.name;
      const updatedTodo = { ...state.todos.at(-1), id: todoId };
      state.todos.splice(-1, 1, updatedTodo);
    },
    deleteItem: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    togoleStutes: (state, action) => {
      const todoId = action.payload;
      state.todos = state.todos.map((item) =>
        item.id === todoId
          ? {
              ...item,
              isComplete: !item.isComplete,
            }
          : item
      );
    },
  },
});
export const {
  fetchTodosStart,
  fetchTodosSuccess,
  fetchTodosFailed,
  addItem,
  updateLastTodoId,
  deleteItem,
  togoleStutes,
} = todoReducer.actions;
export default todoReducer.reducer;
