import React, { Component } from "react";
import "../component/style/styleViewTodo.css";

class ViewTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.name,
      status: false,
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  handleSubmit = (event) => {
    const { value } = this.state;
    const { editTodo, item } = this.props;
    editTodo(item.id, value);
    event.preventDefault();
  };

  onDelete = () => {
    const { item, onDeleteItem } = this.props;
    onDeleteItem(item.id);
  };

  checkStatus = () => {
    const { onCheckStatus, item } = this.props;
    onCheckStatus(item.id);
  };

  render() {
    const { value, status } = this.state;
    const { item, editTodo, onDeleteItem, statusItem, name } = this.props;
    console.log(value);
    return (
      <div className="ViewTodo">
        <button onClick={this.checkStatus}>check</button>
        <form onSubmit={this.handleSubmit}>
          <input
            className={statusItem ? "ItemActive" : "ItemNoActive"}
            type="text"
            value={value}
            onChange={this.handleChange}
          />
        </form>
        <button onClick={this.onDelete}>Xóa</button>
      </div>
    );
  }
}

export default ViewTodo;
