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

  render() {
    const { value } = this.state;
    const {statusItem, onCheckStatus, onDeleteItem,item } = this.props;
    console.log(value);
    return (
      <div className="ViewTodo">
        <button onClick={()=>onCheckStatus(item.id)}>check</button>
        <form onSubmit={this.handleSubmit}>
          <input
            className={statusItem ? "ItemActive" : "ItemNoActive"}
            type="text"
            value={value}
            onChange={this.handleChange}
          />
        </form>
        <button onClick={()=>onDeleteItem(item.id)}>Xóa</button>
      </div>
    );
  }
}

export default ViewTodo;
