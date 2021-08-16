import { all } from "redux-saga/effects";
import { watcherGetListTodo } from "./TodoListSaga";

export default function* mySaga() {
  yield all([watcherGetListTodo()]);
}
