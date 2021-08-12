import React, { useState } from "react";
import PropTypes from "prop-types";
// theme
import { ThemeContext } from "../themes/theme-context";

function Footer({ onSetStatus, status, countItem, ClearCompleted }) {
  const SetStatus = (event) => {
    onSetStatus(event);
  };
  const onClearCompleted = () => {
    ClearCompleted();
  };
  //theme
  const { theme } = React.useContext(ThemeContext);
  return (
    <div className="footer">
      <samp style={{ fontSize: 15, fontWeight: "bold" }}>{countItem}</samp>
      <button
        style={{
          backgroundColor: status === "All" ? "red" : theme.backgroundColor,
          color: theme.color,
        }}
        onClick={() => SetStatus("All")}
      >
        All
      </button>
      <button
        style={{
          backgroundColor: status === "Active" ? "red" : theme.backgroundColor,
          color: theme.color,
        }}
        onClick={() => SetStatus("Active")}
      >
        Active
      </button>
      <button
        style={{
          backgroundColor:
            status === "Completed" ? "red" : theme.backgroundColor,
          color: theme.color,
          backgroundColor: theme.backgroundColor,
        }}
        onClick={() => SetStatus("Completed")}
      >
        Completed
      </button>
      <button
        style={{ color: theme.color, backgroundColor: theme.backgroundColor }}
        onClick={onClearCompleted}
      >
        Clear completed
      </button>
    </div>
  );
}

export default Footer;

Footer.propTypes = {
  SetStatus: PropTypes.func,
  onClearCompleted: PropTypes.func,
};
