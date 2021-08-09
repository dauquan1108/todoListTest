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

  const [search, setSearch] = useState("");

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

  let todoNew = [];
  if (status === "Active") {
    const todoList = Todo.filter((item) => item.status);
    todoNew = [...todoList];
  } else if (status === "Completed") {
    const todoList = Todo.filter((item) => !item.status);
    todoNew = [...todoList];
  } else {
    const todoList = [...Todo];
    todoNew = [...todoList];
  }

  const countItem = () => {
    const countTodo = Todo.filter((item) => !item.status);
    return countTodo.length;
  };

  // search
  const handleSubmit = (event) => {
    setSearch("");
    event.preventDefault();
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const keyWordSearch = todoNew.filter((item) => {
    return item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });

  return (
    <div>
      <div className="SearchTodo">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={search}
            onChange={handleChange}
            placeholder="Tìm kiếm"
          />
        </form>
      </div>
      <Header addData={addData} />
      {keyWordSearch.map((item) => {
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
      <Footer
        onSetStatus={onSetStatus}
        status={status}
        countItem={countItem()}
      />
    </div>
  );
}

export default Todo;
