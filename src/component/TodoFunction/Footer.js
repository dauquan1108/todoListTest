import React, { useState } from "react";

function Footer(props) {
  const { onSetStatus, status } = props;
  const SetStatus = (event) => {
    onSetStatus(event);
  };
  return (
    <div className="Footer">
      <samp>0</samp>
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
    </div>
  );
}

export default Footer;
