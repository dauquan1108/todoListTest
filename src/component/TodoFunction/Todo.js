import React, { useState, useEffect } from "react";
// id
import { v4 as uuIdv4 } from "uuid";
import ViewItem from "./ViewItem";
import Header from "./Header";
import Footer from "./Footer";
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

  const [status, setStatus] = useState("All");
  const onSetStatus = (status) => {
    setStatus(status);
  };

  if (status === "Active") {
    const todoList = Todo.filter((item) => item.status);
    console.log(Todo);
    setTodo(todoList);
    console.log("Active");
  } else if (status === "Completed") {
    const TodoList = Todo.filter((item) => !item.status);
    console.log(Todo);
    setTodo(TodoList);
    console.log("Completed");
  } else {
    console.log("All");
  }

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
      <Footer onSetStatus={onSetStatus} status={status} />
    </div>
  );
}

export default Todo;
