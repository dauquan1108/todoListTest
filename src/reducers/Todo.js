import * as ActionTypes from "../constants/ActionType";
// id
import { v4 as uuIdv4 } from "uuid";

let todo = [];

const Todo = (state = todo, action) => {
  switch (action.type) {
    case ActionTypes.GET_LIST_TODO:
      state = action.todoList;
      todo = [...state];
      return [...state];
    case ActionTypes.ADD_ITEM_TODO:
      const valueText = action.valueText;
      return [...state, { id: uuIdv4(), title: valueText, isComplete: false }];
    case ActionTypes.EDIT_ITEM_TODO:
      const idEdit = action.payload.idItem;
      const valueEdit = action.payload.valueText;
      state.forEach((item) => {
        if (item.id === idEdit) {
          item.title = valueEdit;
        }
      });
      return [...state];
    case ActionTypes.DELETE_ITEM_TODO:
      const idItem = action.payload.idItem;
      return [...state.filter((item) => item.id !== idItem)];
    case ActionTypes.CHECK_IS_COMPLETE:
      const idIsComplete = action.payload.idItem;
      state.forEach((item) => {
        if (item.id === idIsComplete) {
          item.isComplete = !item.isComplete;
        }
      });
      return [...state];
    case ActionTypes.CLEAR_COMPLETED:
      const onCompleted = state.filter((item) => !item.isComplete);
      return [...onCompleted];
    default:
      return [...state];
  }
};

export default Todo;
