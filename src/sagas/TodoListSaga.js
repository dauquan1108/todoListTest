//redux saga
import { put, take, call, fork } from "redux-saga/effects";
// action type
import * as ActionTypes from "../constants/ActionType";
// CallApi default
import CallApi from "../utils/CallApi";
// Link
import * as URL from "../utils/Config";

// getTodo
export function* watcherGetListTodo() {
  while (true) {
    const todoList = yield take(ActionTypes.GET_LIST_TODO_SAGA);
    yield fork(workerGetListTodo, todoList);
  }
}

export function* workerGetListTodo(todoList) {
  const response = yield CallApi().catch((error) => {
    console.log("Lỗi get data: ", error);
  });
  if (response.status === 200) {
    yield put({
      type: ActionTypes.GET_LIST_TODO,
      todoList: response.data,
    });
  }
}
// end getTodo

// add Todo
export function* watcherAddItemTodo() {
  while (true) {
    const value = yield take(ActionTypes.ADD_ITEM_TODO_SAGA);
    const valueText = value.payload.valueText;
    yield call(workerAddTodoItem, valueText);
  }
}

export function* workerAddTodoItem(valueText) {
  yield put({
    type: ActionTypes.ADD_ITEM_TODO,
    valueText,
  });
  const response = yield CallApi("post", `${URL.API_URL}`, {
    title: valueText,
    isComplete: false,
  }).catch((error) => {
    console.log("Lỗi Thêm mới item", error);
  });
  if (response.status !== 201) {
    console.log("khong them dc item");
  }
}
