import React, { Component } from "react";

export default class Error extends Component {
  render() {
    const { id } = this.props;
    return <div>{id && <p>Không thể xóa được Item {id}</p>}</div>;
  }
}
