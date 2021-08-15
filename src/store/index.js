import { combineReducers } from "redux";
import Todo from "../reducers/Todo";
import ShowStatus from "../reducers/ShowStatus";

const appReducers = combineReducers({
  todoList: Todo,
  ShowStatus,
});
export default appReducers;
