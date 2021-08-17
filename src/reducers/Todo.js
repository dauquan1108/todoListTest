import * as ActionTypes from "../constants/ActionType";

let todo = [];

const Todo = (state = todo, action) => {
  switch (action.type) {
    case "GET_DATA":
      return [...action.data];
    case "OK_ADD":
      // console.log("x:", action.payload.data, action.payload.idFake);
      state.forEach((item) => {
        if (item.id === action.payload.idFake) {
          item.id = action.payload.data.id;
          item.title = action.payload.data.title;
          item.isComplete = action.payload.data.isComplete;
        }
      });
      return [...state];
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
    default:
      return [...state];
  }
};

export default Todo;
