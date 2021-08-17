import React, { useState } from "react";
import PropTypes from "prop-types";
// redux
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
// action
import * as action from "../../actions";
//axios
import axios from "axios";
// url api
import * as URL from "../../Utils/URL";
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
    onAddDateMock(value.trim(), dataFake.id);

    addItem(dataFake);

    setValue("");
    event.preventDefault();
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const onAddDateMock = (value, id) => {
    axios({
      method: "post",
      url: URL.URL_API,
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
  const onGetTodoListAfterAddingNew = () => {
    axios
      .get(URL.URL_API)
      .then(function (response) {
        console.log(response);
        return response.data;
      })
      .catch(function (error) {
        console.log("Lỗi get data", error);
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
