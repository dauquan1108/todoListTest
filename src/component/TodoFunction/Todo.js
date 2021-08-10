import React, { useState } from "react";
// id
import { v4 as uuIdv4 } from "uuid";
import SearchHeader from "./SearchHeader";
import Header from "./Header";
import ViewItem from "./ViewItem";
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

  //search;
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const keyWordSearch = todoNew.filter((item) => {
    return item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });

  //onClear Completed
  const onClearCompleted = () => {
    const onCompleted = Todo.filter((item) => !item.status);
    setTodo([...onCompleted]);
  };

  return (
    <div>
      <SearchHeader onChange={handleChange} />
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
        ClearCompleted={onClearCompleted}
      />
    </div>
  );
}

export default Todo;
