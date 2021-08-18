import * as ActionTypes from "../constants/ActionType";

// immer
import produce from "immer";

let todo = [];

const Todo = (state = todo, action) => {
  produce(state, (draft) => {
    switch (action.type) {
      case "GET_DATA":
        debugger;
        console.log(action.data);
        // return [...action.data];
        // draft = action.data;
        break;
      // case "OK_ADD":
      //   state.forEach((item) => {
      //     if (item.id === action.payload.idFake) {
      //       item.id = action.payload.data.id;
      //       item.title = action.payload.data.title;
      //       item.isComplete = action.payload.data.isComplete;
      //     }
      //   });
      //   return [...state];
      // case ActionTypes.ADD_ITEM_TODO:
      //   const data = action.payload.data;
      //   return [...state, data];
      // case ActionTypes.EDIT_ITEM_TODO:
      //   return produce(state, (draft) => {
      //     draft.forEach((item) => {
      //       if (item.id === action.payload.idItem) {
      //         item.title = ${action.payload.valueText}quaasss;
      //       }
      //     });
      //   });
      // case ActionTypes.DELETE_ITEM_TODO:
      //   const idItem = action.payload.idItem;
      //   return [...state.filter((item) => item.id !== idItem)];
      // case ActionTypes.CHECK_IS_COMPLETE:
      //   return produce(state, (draft) => {
      //     draft.forEach((item) => {
      //       if (item.id === action.payload.idItem) {
      //         item.isComplete = !item.isComplete;
      //       }
      //     });
      //   });
      // case ActionTypes.CLEAR_COMPLETED:
      //   const onCompleted = state.filter((item) => !item.isComplete);
      //   return [...onCompleted];
      default:
        break;
    }
  });
};

export default Todo;
