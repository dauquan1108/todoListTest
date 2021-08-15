import * as ActionTypes from "../constants/ActionType";
// id
import { v4 as uuIdv4 } from "uuid";

let todo = [
  { id: 1, title: "Quan1", isComplete: false },
  { id: 2, title: "Quan2", isComplete: false },
  { id: 3, title: "Quan3", isComplete: false },
];

const Todo = (state = todo, action) => {
  switch (action.type) {
    case ActionTypes.ADD_ITEM_TODO:
      const valueText = action.payload.valueText;
      return [{ id: uuIdv4(), title: valueText, isComplete: false }, ...state];
    case ActionTypes.EDIT_ITEM_TODO:
      const idEdit = action.payload.idItem;
      const valueEdit = action.payload.valueText;
      state.forEach((item) => {
        if (item.id === idEdit) {
          item.title = `${valueEdit}quaasss`;
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
