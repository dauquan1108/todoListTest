import React, { useState, useEffect } from "react";

function ViewItem(props) {
  const { item, status, onCheck, upDate, deleteItem } = props;
  const [text, setText] = useState(item.name);

  //   useEffect(() => {
  //     status={status.props}
  //   });

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
    <div className="HeaderTodo">
      <button onClick={onCheckStatus}>Check</button>
      <form onSubmit={handleSubmit}>
        <input
          style={status ? { color: "red" } : {}}
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
