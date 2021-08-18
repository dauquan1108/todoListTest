import { combineReducers } from "redux";
// import Todo from "../reducers/Todo";
import ShowStatus from "../reducers/ShowStatus";
import TodoImMer from "../reducers/TodoImMer";

const appReducers = combineReducers({
  // todoList: Todo,
  todoList: TodoImMer,
  ShowStatus,
});
export default appReducers;
