import { all } from "redux-saga/effects";
import { watcherGetListTodo, watcherAddItemTodo } from "./TodoListSaga";

export default function* mySaga() {
  yield all([watcherGetListTodo(), watcherAddItemTodo()]);
}
