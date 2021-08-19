import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
// theme
import { ThemeContext } from "../../themes/theme-context";
// redux
import { connect } from "react-redux";
// action
import * as action from "../../actions";
// axios
import axios from "axios";

// url
import * as URL from "../../utils/URL";
function ViewItem(props) {
  const { item, deleteItem, editItem, title, checkIsComplete, isComplete } =
    props;

  //theme
  const { theme } = React.useContext(ThemeContext);

  useEffect(() => {
    setText(item.title);
  }, [title]);

  const [text, setText] = useState(title);

  const handleSubmit = (event) => {
    onEditItemMock(item.id, text);
    editItem(item.id, text);
    event.preventDefault();
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const onCheckStatus = () => {
    onStatusMock(item.id);
    checkIsComplete(item.id);
  };

  const onDeleteItem = () => {
    onDeleteMock(item.id);
    deleteItem(item.id);
  };

  // axios
  const onStatusMock = (id) => {
    axios({
      method: "put",
      url: `${URL.API_URL}/${id}`,
      data: {
        isComplete: !isComplete,
      },
    }).catch((error) => {
      console.log("Sửa status thất bại: ", error);
    });
  };
  const onEditItemMock = (id, value) => {
    axios({
      method: "put",
      url: `${URL.API_URL}/${id}`,
      data: {
        title: value,
      },
    }).catch((error) => {
      console.log("Sửa item thất bại: ", error);
    });
  };
  const onDeleteMock = (id) => {
    axios({
      method: "delete",
      url: `${URL.API_URL}/${id}`,
    }).catch((error) => {
      console.log("Xóa item thất bại: ", error);
    });
  };
  return (
    <div
      className="headerTodo"
      style={{
        flexDirection: "row",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <button
        onClick={onCheckStatus}
        style={{
          color: theme.color,
          backgroundColor: theme.backgroundColor,
        }}
      >
        Check
      </button>
      <form onSubmit={handleSubmit}>
        <input
          style={isComplete ? { color: "red" } : {}}
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Vui lòng nhập"
        />
      </form>
      <button
        onClick={onDeleteItem}
        style={{
          color: theme.color,
          backgroundColor: theme.backgroundColor,
        }}
      >
        Xóa
      </button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    editItem: (idItem, valueText) => {
      dispatch(action.ON_EDIT_ITEM_TODO(idItem, valueText));
    },
    deleteItem: (idItem) => {
      dispatch(action.ON_DELETE_ITEM_TODO(idItem));
    },
    checkIsComplete: (idItem) => {
      dispatch(action.ON_CHECK_IS_COMPLETE(idItem));
    },
  };
};

export default connect(null, mapDispatchToProps)(ViewItem);

ViewItem.prototype = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  onCheckStatus: PropTypes.func,
  onDeleteItem: PropTypes.func,
  deleteItem: PropTypes.func,
  checkIsComplete: PropTypes.func,
  editItem: PropTypes.func,
};
ViewItem.defaultPros = {
  text: "",
};
