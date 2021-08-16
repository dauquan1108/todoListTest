import * as ActionTypes from "../constants/ActionType";

let status = "All";

const ShowStatus = (state = status, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_STATUS:
      const setStatus = action.payload.status;
      return setStatus;
    default:
      return state;
  }
};

export default ShowStatus;
