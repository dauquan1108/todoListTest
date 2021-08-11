import React, { Component } from "react";

class Paging extends Component {
  chosePage = (event) => {
    const { chosePage } = this.props;
    chosePage(event);
  };

  render() {
    const { pageNumbers, currentPage } = this.props;
    return (
      <div className="pagination-custom">
        <ul id="page-numbers">
          {pageNumbers.map((number) => {
            if (currentPage === number) {
              return (
                <li key={number} id={number} className="active">
                  {number}
                </li>
              );
            } else {
              return (
                <li key={number} id={number} onClick={this.chosePage}>
                  {number}
                </li>
              );
            }
          })}
        </ul>
      </div>
    );
  }
}

export default Paging;
