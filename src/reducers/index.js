import { combineReducers } from "redux";
import Todo from "./Todo";
import ShowStatus from "./ShowStatus";

const appReducers = combineReducers({
  todoList: Todo,
  ShowStatus,
});
export default appReducers;
