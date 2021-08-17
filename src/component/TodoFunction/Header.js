import React, { useState } from "react";
import PropTypes from "prop-types";
// redux
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
// action
import * as action from "../../actions";
//axios
import axios from "axios";
// url
import * as URL from "../../utils/URL";
// id
import { v4 as uuIdv4 } from "uuid";

function Header(props) {
  const { addItem } = props;
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    const dataFake = {
      id: uuIdv4(),
      title: value.trim(),
      isComplete: false,
    };
    event.preventDefault();
    onAddDateMock(value.trim(), dataFake.id);
    addItem(dataFake);
    setValue("");
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const onAddDateMock = (value, id) => {
    axios({
      method: "post",
      url: URL.API_URL,
      data: {
        title: value,
        isComplete: false,
      },
    })
      .then((response) => {
        console.log("log", response);
        if (response.status === 201 && id) {
          const data = response.data;
          dispatch({ type: "OK_ADD", payload: { data, idFake: id } });
        }
      })
      .catch((error) => {
        console.log("Lỗi Thêm item: ", error);
      });
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
