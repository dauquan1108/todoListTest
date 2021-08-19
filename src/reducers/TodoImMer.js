import * as ActionTypes from "../constants/ActionType";

// immer
import produce from "immer";

let todo = [];

const TodoImMer = (state = todo, action) => {
  switch (action.type) {
    case "GET_DATA":
      return [...action.data];
    case "OK_ADD":
      return produce(state, (draft) => {
        draft.forEach((item) => {
          if (item.id === action.payload.idFake) {
            item.id = action.payload.data.id;
            item.title = action.payload.data.title;
            item.isComplete = action.payload.data.isComplete;
          }
        });
      });
    case ActionTypes.ADD_ITEM_TODO:
      const data = action.payload.data;
      return produce(state, (draft) => {
        draft.push(data);
      });
    case ActionTypes.EDIT_ITEM_TODO:
      return produce(state, (draft) => {
        draft.forEach((item) => {
          if (item.id === action.payload.idItem) {
            item.title = `${action.payload.valueText}quaasss`;
          }
        });
      });
    case ActionTypes.DELETE_ITEM_TODO:
      const idItem = action.payload.idItem;
      return produce(state, (draft) => {
        const index = draft.findIndex((todo) => todo.id === idItem);
        if (index !== -1) draft.splice(index, 1);
      });
    case ActionTypes.CHECK_IS_COMPLETE:
      return produce(state, (draft) => {
        draft.forEach((item) => {
          if (item.id === action.payload.idItem) {
            item.isComplete = !item.isComplete;
          }
        });
      });
    case ActionTypes.CLEAR_COMPLETED:
      return produce(state, (draft) => {
        const listItem = state.filter((item) => item.isComplete);
        listItem.forEach((item) => {
          const index = draft.findIndex((todo) => todo.id === item.id);
          if (index !== -1) draft.splice(index, 1);
        });
      });

    default:
      return [...state];
  }
};

export default TodoImMer;
