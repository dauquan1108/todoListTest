import React, { useState } from "react";
import PropTypes from "prop-types";

function Header(props) {
  const { addData } = props;
  const [value, setValue] = useState("");
  const handleSubmit = (event) => {
    addData(value);
    setValue("");
    event.preventDefault();
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Vui lòng nhập"
      />
    </form>
  );
}

export default Header;

Header.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
};

Header.defaultPros = {
  value: "",
};
