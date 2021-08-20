import { createSlice } from "@reduxjs/toolkit";

export const todo = createSlice({
  name: "todoList",
  initialState: {
    todo: [],
    status: "All",
  },
  reducers: {
    getDataTodo: (state, data) => {
      state.todo = [...data.payload];
    },
    addTodoList: (state, data) => {
      const item = data.payload;
      state.todo.push(item);
    },
    editAddDataTodoList: (state, information) => {
      const data = information.payload.data;
      const idPack = information.payload.id;
      const item = state.todo.find((item) => item.id === idPack);
      if (todo) {
        item.id = data.id;
        item.title = data.title;
        item.isComplete = false;
      }
    },
    editStatusTodoList: (state, status) => {
      const item = state.todo.find((item) => item.id === status.payload);
      if (item) {
        item.isComplete = !item.isComplete;
      }
    },
    editItemTodoList: (state, value) => {
      const item = state.todo.find((item) => item.id === value.payload.id);
      if (item) {
        item.title = `${value.payload.text} quan`;
      }
    },
    deleteItemTodoList: (state, id) => {
      console.log(id);
      const todoNew = state.todo.filter((item) => item.id !== id.payload);
      state.todo = todoNew;
    },
    editStatus: (state, status) => {
      console.log(status.payload);
      state.status = status.payload;
      debugger;
    },
    clearItemIsComplete: (state) => {
      const todoIsComplete = state.todo.filter((item) => !item.isComplete);
      state.todo = todoIsComplete;
    },
  },
});

export const {
  getDataTodo,
  addTodoList,
  editAddDataTodoList,
  editStatusTodoList,
  editItemTodoList,
  deleteItemTodoList,
  editStatus,
  clearItemIsComplete,
} = todo.actions;

export const todoListToolkit = (state) => state.todoList.todo;

export default todo.reducer;
