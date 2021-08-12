import React, { useState } from "react";
import PropTypes from "prop-types";

function Footer({ onSetStatus, status, countItem, ClearCompleted }) {
  const SetStatus = (event) => {
    onSetStatus(event);
  };
  const onClearCompleted = () => {
    ClearCompleted();
  };
  return (
    <div className="footer">
      <samp style={{ fontSize: 15, fontWeight: "bold" }}>{countItem}</samp>
      <button
        style={{ backgroundColor: status === "All" && "red" }}
        onClick={() => SetStatus("All")}
      >
        All
      </button>
      <button
        style={{ backgroundColor: status === "Active" && "red" }}
        onClick={() => SetStatus("Active")}
      >
        Active
      </button>
      <button
        style={{ backgroundColor: status === "Completed" && "red" }}
        onClick={() => SetStatus("Completed")}
      >
        Completed
      </button>
      <button onClick={onClearCompleted}>Clear completed</button>
    </div>
  );
}

export default Footer;

Footer.propTypes = {
  SetStatus: PropTypes.func,
  onClearCompleted: PropTypes.func,
};
