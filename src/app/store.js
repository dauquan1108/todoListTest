import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "../component/TodoFunctionReduxToolKit/reducersSlice";

export default configureStore({
  reducer: {
    todoList: TodoReducer,
  },
});
