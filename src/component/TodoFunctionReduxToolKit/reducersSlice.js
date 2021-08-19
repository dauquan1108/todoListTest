import { createSlice } from "@reduxjs/toolkit";

export const todo = createSlice({
  name: "todoList",
  initialState: {
    todo: [
      {
        title: "title 1",
        isComplete: false,
        id: "1",
      },
      {
        title: "title 2",
        isComplete: false,
        id: "2",
      },
      {
        title: "title 3",
        isComplete: false,
        id: "3",
      },
    ],
  },
  reducers: {
    getDataTodo: (state, data) => {
      state.todo = [...data.payload];
    },
  },
});

export const { getDataTodo } = todo.actions;

export const todoListToolkit = (state) => state.todoList.todo;

export default todo.reducer;
