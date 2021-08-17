import * as ActionTypes from "../constants/ActionType";
// id
import { v4 as uuIdv4 } from "uuid";
// // axios
// import axios from "axios";
// // url api
// import * as URL from "../Utils/URL";

let todo = [];

const Todo = (state = todo, action) => {
  switch (action.type) {
    case "GET_DATA":
      return [...action.data];
    case "GET_TODO_LIST_AFTER_ADDING_NEW":
      return [...action.dataNew];
    case ActionTypes.ADD_ITEM_TODO:
      const data = action.payload.data;
      return [...state, data];
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
    case "OK_ADD":
      // const onCompleted = state.filter((item) => !item.isComplete);
      // Tim vij tri
      // Lap du lie mo vao
      console.log("x:", action.payload.data, action.payload.idFake);
      return [...state];
    default:
      return [...state];
  }
};

export default Todo;
