import * as ActionTypes from "../constants/ActionType";
// immer
import produce from "immer";

let status = "All";

// const ShowStatus = (state = status, action) => {
//   switch (action.type) {
//     case ActionTypes.SHOW_STATUS:
//       const setStatus = action.payload.status;
//       return setStatus;
//     default:
//       return state;
//   }
// };

// export default ShowStatus;

const ShowStatus = (state = status, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.SHOW_STATUS:
        return (draft = action.payload.status);
      default:
        break;
    }
  });
export default ShowStatus;
