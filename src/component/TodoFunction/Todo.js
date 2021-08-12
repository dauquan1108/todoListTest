import React, { useState } from "react";
import PropTypes from "prop-types";
// id
import { v4 as uuIdv4 } from "uuid";
// component
import SearchHeader from "./SearchHeader";
import Header from "./Header";
import ViewItem from "./ViewItem";
import Footer from "./Footer";
import InputText from "./InputText";

function Todo() {
  const [todo, setTodo] = useState([
    { id: 1, name: "Quan", status: false },
    { id: 2, name: "Quan2", status: false },
    { id: 3, name: "Quan3", status: false },
  ]);

  const [status, setStatus] = useState("All");

  const [search, setSearch] = useState("");

  const addData = (valueFrom) => {
    setTodo([{ id: uuIdv4(), name: valueFrom.name, status: false }, ...todo]);
  };

  const onUpDate = (id, value) => {
    todo.forEach((item) => {
      if (item.id === id) {
        item.name = `${value}quaasss`;
      }
    });
    setTodo([...todo]);
  };

  const deleteItem = (id) => {
    setTodo(todo.filter((item) => item.id !== id));
  };

  const checkStatus = (id) => {
    todo.forEach((item) => {
      if (item.id === id) {
        item.status = !item.status;
      }
    });
    setTodo([...todo]);
  };

  const onSetStatus = (status) => {
    setStatus(status);
  };

  let todoNew = [];
  if (status === "Active") {
    const todoList = todo.filter((item) => item.status);
    todoNew = [...todoList];
  } else if (status === "Completed") {
    const todoList = todo.filter((item) => !item.status);
    todoNew = [...todoList];
  } else {
    const todoList = [...todo];
    todoNew = [...todoList];
  }
  //search;
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const keyWordSearch = todoNew.filter((item) => {
    return item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });

  const countItem = () => {
    const countTodo = todo.filter((item) => !item.status);
    return countTodo.length;
  };

  //onClear Completed
  const onClearCompleted = () => {
    const onCompleted = todo.filter((item) => !item.status);
    setTodo([...onCompleted]);
  };

  return (
    <div>
      <InputText title="Tìm kiếm" onChange={handleChange} />
      {/* <SearchHeader onChange={handleChange} /> */}
      {/* <Header addData={addData} /> */}
      <InputText title="Vui lòng nhâp" addData={addData} />
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
Todo.propTypes = {
  addData: PropTypes.func,
  onUpDate: PropTypes.func,
  deleteItem: PropTypes.func,
  checkStatus: PropTypes.func,
  onSetStatus: PropTypes.func,
  countItem: PropTypes.func,
  handleChange: PropTypes.func,
  onClearCompleted: PropTypes.func,
};
Todo.defaultPros = {
  todo: [],
  status: "",
  search: "",
  todoNew: "",
};
