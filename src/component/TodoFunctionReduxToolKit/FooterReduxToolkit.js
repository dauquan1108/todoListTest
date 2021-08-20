import React from "react";
import PropTypes from "prop-types";
// theme
import { ThemeContext } from "../../themes/theme-context";
// selector
import { amountOfUnfinishedWork } from "../../selectors";
// URL
import * as URL from "../../utils/URL";
//axios
import axios from "axios";
import { useState } from "react";
// redux
import { useDispatch } from "react-redux";
// redux toolkit
import { editStatus } from "./reducersSlice";

import { clearItemIsComplete } from "./reducersSlice";

function Footer(props) {
  const dispatch = useDispatch();
  const { todoList } = props;
  const [status, setStatus] = useState("All");
  const SetStatus = (event) => {
    setStatus(event);
    dispatch(editStatus(event));
  };
  const onClearCompleted = () => {
    onClearCompletedMock();
    dispatch(clearItemIsComplete());
  };
  //axios
  const onClearCompletedMock = () => {
    const todoListNew = todoList.filter((item) => item.isComplete);
    todoListNew.forEach((item) => {
      axios({
        method: "delete",
        url: `${URL.API_URL}/${item.id}`,
      }).catch((error) => {
        console.log("Xóa item thất bại:  ", item.id, error);
      });
    });
  };
  //theme
  const { theme } = React.useContext(ThemeContext);
  return (
    <div className="footer">
      {/* <samp style={{ fontSize: 15, fontWeight: "bold" }}>{countItem}</samp> */}
      <button
        style={{
          backgroundColor: status === "All" ? "red" : theme.backgroundColor,
          color: theme.color,
        }}
        onClick={() => SetStatus("All")}
      >
        All
      </button>
      <button
        style={{
          backgroundColor: status === "Active" ? "red" : theme.backgroundColor,
          color: theme.color,
        }}
        onClick={() => SetStatus("Active")}
      >
        Active
      </button>
      <button
        style={{
          backgroundColor:
            status === "Completed" ? "red" : theme.backgroundColor,
          color: theme.color,
        }}
        onClick={() => SetStatus("Completed")}
      >
        Completed
      </button>
      <button
        style={{ color: theme.color, backgroundColor: theme.backgroundColor }}
        onClick={onClearCompleted}
      >
        Clear completed
      </button>
    </div>
  );
}

export default Footer;

Footer.propTypes = {
  SetStatus: PropTypes.func,
  onClearCompleted: PropTypes.func,
};
