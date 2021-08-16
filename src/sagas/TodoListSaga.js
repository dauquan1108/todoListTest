//redux saga
import { put, take, call } from "redux-saga/effects";
// action type
import * as ActionTypes from "../constants/ActionType";
// CallApi default
import CallApi from "../utils/CallApi";
// Link
import * as URL from "../utils/Config";

export function* watcherGetListTodo() {
  while (true) {
    yield take(ActionTypes.GET_LIST_TODO_SAGA);
    const response = yield CallApi().catch((error) => {
      console.log("Lỗi Get data: ", error);
    });
    if (response.status === 200) {
      yield put({
        type: ActionTypes.GET_LIST_TODO,
        todoList: response.data,
      });
    }
  }
}
