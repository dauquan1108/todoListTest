import React, { useState, useEffect } from "react";

function ViewItem(props) {
  const { item, onCheck, upDate, deleteItem, name } = props;
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

  return (
    <div
      className="HeaderTodo"
      style={{
        flexDirection: "row",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <button onClick={onCheckStatus}>Check</button>
      <form onSubmit={handleSubmit}>
        <input
          style={item.status ? { color: "red" } : {}}
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Vui lòng nhập"
        />
      </form>
      <button onClick={onDeleteItem}>Xóa</button>
    </div>
  );
}
export default ViewItem;
