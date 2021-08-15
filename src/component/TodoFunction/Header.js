import React, { useState } from "react";
import PropTypes from "prop-types";
// redux
import { connect } from "react-redux";
// action
import * as action from "../../actions";

function Header(props) {
  const { addItem } = props;
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    addItem(value.trim());
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

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (valueText) => {
      dispatch(action.ON_ADD_ITEM_TODO(valueText));
    },
  };
};

export default connect(null, mapDispatchToProps)(Header);

Header.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
};

Header.defaultPros = {
  value: "",
};
