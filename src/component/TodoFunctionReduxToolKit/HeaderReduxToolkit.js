import React, { useState } from "react";
import PropTypes from "prop-types";
// redux toolkit
import { addTodoList, editAddDataTodoList } from "./reducersSlice";
// redux
import { useDispatch } from "react-redux";
// action
//axios
import axios from "axios";
// url
import * as URL from "../../utils/URL";
// id
import { v4 as uuIdv4 } from "uuid";

function Header(props) {
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
    dispatch(addTodoList(dataFake));
    setValue("");
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [ketCode, setKeyCode] = useState("");
  const onKeyDownTest = (event) => {
    setKeyCode(event.keyCode);
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
        if (response.status === 201 && id) {
          const data = response.data;
          const information = {
            data,
            id,
          };
          dispatch(editAddDataTodoList(information));
        }
      })
      .catch((error) => {
        console.log("Lỗi Thêm item: ", error);
      });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Vui lòng nhập"
          onKeyDown={onKeyDownTest}
        />
      </form>
      <p>keyCode {ketCode}</p>
    </>
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
