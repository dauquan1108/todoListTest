import React, { Component } from "react";

import "../component/style/styleViewTodo.css";
// id
import { v4 as uuIdv4 } from "uuid";

// component
import HeaderTodo from "./HeaderTodo";
import ViewTodo from "./ViewTodo";
import FooterTodo from "./FooterTodo";
class MainTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listTodo: [
        { id: 1, name: "viec 1", status: false },
        { id: 2, name: "viec 2", status: false },
        { id: 3, name: "viec 3", status: false },
      ],
      viewTodoList: [],
      showActive: "All",
      value: "",
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    const { showActive, listTodo } = prevState;
    let viewTodoList = [...listTodo];
    switch (showActive) {
      case "Active": {
        viewTodoList = listTodo.filter((item) => item.status);
        break;
      }
      case "Completed": {
        viewTodoList = listTodo.filter((item) => !item.status);
        break;
      }
      default: {
        break;
      }
    }

    return {
      viewTodoList,
    };
  }

  addTodo = (value) => {
    const { listTodo } = this.state;
    this.setState({
      listTodo: [{ id: uuIdv4(), name: value, status: false }, ...listTodo],
    });
  };
  editTodo = (id, value) => {
    const { listTodo } = this.state;
    listTodo.forEach((item) => {
      if (item.id === id) {
        item.name = `${value} Quan`;
      }
    });
    this.setState({
      listTodo,
    });
  };
  onDeleteItem = (id) => {
    const { listTodo } = this.state;
    const listTodo = listTodo.filter((e) => e.id !== id);
    this.setState({
      listTodo,
    });
  };
  onCheckStatus = (id) => {
    const { listTodo } = this.state;
    listTodo.forEach((item) => {
      if (item.id === id) {
        item.status = !item.status;
      }
    });
    this.setState({
      listTodo,
    });
  };

  onShowActive = (event) => {
    this.setState({
      showActive: event,
    });
  };

  countNumberTodo = () => {
    const { listTodo } = this.state;
    const todoNumber = listTodo.filter((num) => !num.status);
    return todoNumber.length;
  };

  onClearAllItem = () => {
    const { listTodo } = this.state;
    this.setState({
      listTodo: listTodo.filter((item) => item.status === false),
    });
  };

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      value: "",
    });
  };
  render() {
    const { viewTodoList, status, value, listTodo } = this.state;
    console.log(listTodo);
    const count = this.countNumberTodo();
    const search = [...viewTodoList];
    const searchTodo = search.filter((item) => {
      return item.name.toLowerCase().indexOf(value.toLocaleLowerCase()) !== -1;
    });

    return (
      <div className="MainTodo">
        <div className="SearchTodo">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={value}
              onChange={this.handleChange}
              placeholder="Tìm kiếm"
            />
          </form>
        </div>
        <HeaderTodo addTodo={this.addTodo} />
        {searchTodo.map((item) => {
          return (
            <ViewTodo
              key={item.id}
              item={item}
              name={item.name}
              statusItem={item.status}
              status={status}
              editTodo={this.editTodo}
              onDeleteItem={this.onDeleteItem}
              onCheckStatus={this.onCheckStatus}
            />
          );
        })}
        <FooterTodo
          onShowActive={this.onShowActive}
          countTodo={count}
          onClearAllItem={this.onClearAllItem}
        />
      </div>
    );
  }
}

export default MainTodo;
