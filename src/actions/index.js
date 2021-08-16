import * as ActionTypes from "../constants/ActionType";

//--------------------- Redux-------------------------//
export const ON_GET_LIST_TODO = (todoList) => {
  debugger;
  return {
    type: ActionTypes.GET_LIST_TODO,
    todoList,
  };
};

// Header
export const ON_ADD_ITEM_TODO = (valueText) => {
  return {
    type: ActionTypes.ADD_ITEM_TODO,
    payload: {
      valueText,
    },
  };
};

// View Item
export const ON_EDIT_ITEM_TODO = (idItem, valueText) => {
  return {
    type: ActionTypes.EDIT_ITEM_TODO,
    payload: {
      idItem,
      valueText,
    },
  };
};
export const ON_DELETE_ITEM_TODO = (idItem) => {
  return {
    type: ActionTypes.DELETE_ITEM_TODO,
    payload: {
      idItem,
    },
  };
};
export const ON_CHECK_IS_COMPLETE = (idItem) => {
  return {
    type: ActionTypes.CHECK_IS_COMPLETE,
    payload: {
      idItem,
    },
  };
};

// Footer
export const ON_SHOW_STATUS = (status) => {
  return {
    type: ActionTypes.SHOW_STATUS,
    payload: {
      status,
    },
  };
};
export const ON_CLEAR_COMPLETED = () => {
  return {
    type: ActionTypes.CLEAR_COMPLETED,
  };
};
//-------------------  end Redux -------------------//

//------------------ redux saga -------------------//
export const ON_GET_LIST_TODO_SAGA = () => {
  return {
    type: ActionTypes.GET_LIST_TODO_SAGA,
  };
};

//Header

//view

// Footer
//---------------- end redux saga ----------------//
