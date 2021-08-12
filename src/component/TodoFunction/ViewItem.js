import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
// theme
import { ThemeContext } from "../themes/theme-context";

function ViewItem({ item, onCheck, upDate, deleteItem, name }) {
  const [text, setText] = useState(name);

  useEffect(() => {
    setText(name);
  }, [name]);

  const handleSubmit = (event) => {
    upDate(item.id, text);
    event.preventDefault();
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const onCheckStatus = () => {
    onCheck(item.id);
  };

  const onDeleteItem = () => {
    deleteItem(item.id);
  };
  //theme
  const { theme } = React.useContext(ThemeContext);
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
          style={item.status ? { color: "red" } : {}}
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
};
ViewItem.defaultPros = {
  text: "",
};
