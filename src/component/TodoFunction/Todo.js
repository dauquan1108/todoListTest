import React, { useState, useEffect } from "react";
// id
import { v4 as uuIdv4 } from "uuid";
import ViewItem from "./ViewItem";
import Header from "./Header";
function Todo() {
  const [Todo, setTodo] = useState([
    { id: 1, name: "Quan", status: false },
    { id: 2, name: "Quan2", status: false },
    { id: 3, name: "Quan3", status: false },
  ]);

  const addData = (value) => {
    setTodo([{ id: uuIdv4(), name: value, status: false }, ...Todo]);
  };

  const onUpDate = (id, value) => {
    Todo.filter((item) => {
      if (item.id === id) {
        item.name = `${value}quaasss`;
      }
    });
    setTodo([...Todo]);
    console.log({ Todo });
  };

  const deleteItem = (id) => {
    setTodo(Todo.filter((item) => item.id !== id));
  };

  const checkStatus = (id) => {
    Todo.filter((item) => {
      if (item.id === id) {
        item.status = !item.status;
      }
    });
    setTodo([...Todo]);
  };
  return (
    <div>
      <Header addData={addData} />
      {Todo.map((item) => {
        return (
          <ViewItem
            key={item.id}
            item={item}
            name={item.name}
            onCheck={checkStatus}
            upDate={onUpDate}
            deleteItem={deleteItem}
          />
        );
      })}
    </div>
  );
}

export default Todo;
