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

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   const test = nextProps.name;
  //   const t = prevState.value;
  //   console.log("nextProps.name", test);
  //   console.log("prevState.value", t);
  //   if (nextProps.name !== prevState.value) {
  //     // return {
  //     const  value = nextProps.name;
  //     // };
  //     return value
  //   }
  //
  // }


  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log("prevProps.name", prevProps.name);
  //   console.log("this.props.name", this.props.name);
  //   if (prevProps.name !== this.props.name) {
  //     this.setState({
  //       value: this.props.name,
  //     });
  //   }
  // }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.name !== this.props.name){
      this.setState({
        value: this.props.name
      });
    }
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
    const { statusItem, onCheckStatus, onDeleteItem, item } = this.props;
    return (
      <div className="ViewTodo">
        <button onClick={() => onCheckStatus(item.id)}>check</button>
        <form onSubmit={this.handleSubmit}>
          <input
            className={statusItem ? "ItemActive" : "ItemNoActive"}
            type="text"
            value={value}
            onChange={this.handleChange}
          />
        </form>
        <button onClick={() => onDeleteItem(item.id)}>Xóa</button>
      </div>
    );
  }
}

export default ViewTodo;
