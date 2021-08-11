import React, { Component } from "react";

// style
import "../component/style/styleViewTodo.css";

// id
import { v4 as uuIdv4 } from "uuid";

// component
import HeaderTodo from "./HeaderTodo";
import ViewTodo from "./ViewTodo";
import FooterTodo from "./FooterTodo";
import Paging from "./Paging";

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
      text: "",
      currentPage: 1,
      newsPerPage: 5,
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
    const { text } = prevState;
    const searchTodo = viewTodoList.filter((item) => {
      return item.name.toLowerCase().indexOf(text.toLocaleLowerCase()) !== -1;
    });
    return {
      searchTodo,
    };
  }

  // them moi
  addTodo = (value) => {
    const { listTodo } = this.state;
    this.setState({
      listTodo: [{ id: uuIdv4(), name: value, status: false }, ...listTodo],
    });
  };

  // sua
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

  //delete
  onDeleteItem = (id) => {
    this.setState((state) => ({
      listTodo: state.listTodo.filter((item) => item.id !== id),
    }));
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
    this.setState((state) => ({
      listTodo: state.listTodo.filter((item) => item.status === false),
    }));
  };

  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  handleSubmit = (event) => {
    this.setState({
      text: "",
    });
    event.preventDefault();
  };

  //Phan trang
  chosePage = (event) => {
    this.setState({
      currentPage: Number(event.target.id),
    });
  };

  render() {
    const { status, text, listTodo, searchTodo, currentPage, newsPerPage } =
      this.state;
    const count = this.countNumberTodo();
    // phan trang
    // tin tuc cuoi cung
    const ofLastNews = currentPage * newsPerPage;
    const ofFirstNews = ofLastNews - newsPerPage;
    const currentTodos = searchTodo.slice(ofFirstNews, ofLastNews);
    const renderTodos = currentTodos.map((item) => {
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
    });
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(searchTodo.length / newsPerPage); i++) {
      pageNumbers.push(i);
    }
    return (
      <div className="MainTodo">
        <div className="SearchTodo">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={text}
              onChange={this.handleChange}
              placeholder="Tìm kiếm"
            />
          </form>
        </div>
        <HeaderTodo addTodo={this.addTodo} />
        {renderTodos}
        <Paging
          pageNumbers={pageNumbers}
          currentPage={currentPage}
          chosePage={this.chosePage}
        />
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
