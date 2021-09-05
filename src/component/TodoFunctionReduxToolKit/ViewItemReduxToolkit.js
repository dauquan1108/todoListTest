import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
// theme
import { ThemeContext } from "../../themes/theme-context";
// reducer redux toolkit
import {
  editStatusTodoList,
  editItemTodoList,
  deleteItemTodoList,
} from "./reducersSlice";
// axios
import axios from "axios";
// url
import * as URL from "../../utils/URL";
// useDispatch
import { useDispatch } from "react-redux";
// component
import Error from "./Error";
function ViewItem(props) {
  const dispatch = useDispatch();
  const { item, title, isComplete, getIdError } = props;

  //theme
  const { theme } = React.useContext(ThemeContext);

  useEffect(() => {
    setText(item.title);
  }, [title]);

  const [text, setText] = useState(title);

  const handleSubmit = (event) => {
    onEditItemMock(item.id, text);
    const id = item.id;
    const value = {
      id,
      text,
    };
    dispatch(editItemTodoList(value));
    event.preventDefault();
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const onCheckStatus = () => {
    onStatusMock(item.id);
    dispatch(editStatusTodoList(item.id));
  };

  const onDeleteItem = () => {
    onDeleteMock(item.id);
    dispatch(deleteItemTodoList(item.id));
  };

  // axios
  const onStatusMock = (id) => {
    axios({
      method: "put",
      url: `${URL.API_URL}/${id}`,
      data: {
        isComplete: !isComplete,
      },
    }).catch((error) => {
      console.log("Sửa status thất bại: ", error);
    });
  };
  const onEditItemMock = (id, value) => {
    axios({
      method: "put",
      url: `${URL.API_URL}/${id}`,
      data: {
        title: value,
      },
    }).catch((error) => {
      console.log("Sửa item thất bại: ", error);
    });
  };
  const onDeleteMock = (id) => {
    axios({
      method: "delete",
      url: `${URL.API_URL}/${id}`,
    }).catch((error) => {
      console.log("Xóa item thất bại: ", id, ": ", error);
      getIdError(id);
    });
  };
  return (
    <div
      className="headerTodo"
      style={{
        flexDirection: "row",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <button
        onClick={onCheckStatus}
        style={{
          color: theme.color,
          backgroundColor: theme.backgroundColor,
        }}
      >
        Check
      </button>
      <form onSubmit={handleSubmit}>
        <input
          style={isComplete ? { color: "red" } : {}}
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Vui lòng nhập"
        />
      </form>
      <button
        onClick={onDeleteItem}
        style={{
          color: theme.color,
          backgroundColor: theme.backgroundColor,
        }}
      >
        Xóa
      </button>
    </div>
  );
}

export default ViewItem;

ViewItem.prototype = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  onCheckStatus: PropTypes.func,
  onDeleteItem: PropTypes.func,
  deleteItem: PropTypes.func,
  checkIsComplete: PropTypes.func,
  editItem: PropTypes.func,
};
ViewItem.defaultPros = {
  text: "",
};
