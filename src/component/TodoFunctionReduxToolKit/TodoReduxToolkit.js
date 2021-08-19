import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
// react-redux
import { connect } from "react-redux";
// import { useDispatch } from "react-redux";

// selectors
import { getVisibleTodo } from "../../selectors";

// action
import * as action from "../../actions";

// axios
import axios from "axios";

// url
import * as URL from "../../utils/URL";

// component
import SearchHeader from "./SearchHeaderReduxToolkit";
import Header from "./HeaderReduxToolkit";
import ViewItem from "./ViewItemReduxToolkit";
import Footer from "./FooterReduxToolkit";
import Paging from "./PagingReduxToolkit";
// redux toolkit
import { getDataTodo } from "./reducersSlice";
// style
import "./style/styleTodoReduxToolkit.css";

// redux toolkit
import { useSelector, useDispatch } from "react-redux";
import { todoListToolkit } from "./reducersSlice";

function Todo(props) {
  const { todoList, showStatus, getList } = props;
  const dispatch = useDispatch();

  // redux toolkit
  const todoListNewToolkit = useSelector(todoListToolkit);

  const [status, setStatus] = useState("All");
  const onSetStatus = (status) => {
    setStatus(status);
    showStatus(status);
  };
  // axios
  useEffect(() => {
    axios
      .get(URL.API_URL)
      .then(function (response) {
        if (response.status === 200) {
          const data = response.data;
          dispatch(getDataTodo(data));
        }
      })
      .catch(function (error) {
        console.log("Lỗi get data từ Mock API", error);
      });
  }, []);

  // //search;
  // const [search, setSearch] = useState("");
  // const handleChange = (event) => {
  //   setSearch(event.target.value);
  // };
  // const keyWordSearch = todoList.filter((item) => {
  //   return item.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  // });

  // // Phan trang
  // const [currentPage, setCurrentPage] = useState(1);
  // const [newsPerPage, setNewsPerPage] = useState(5);
  // const indexOfLastNews = currentPage * newsPerPage;
  // const indexOfFirstNews = indexOfLastNews - newsPerPage;
  // const currentTodo = keyWordSearch.slice(indexOfFirstNews, indexOfLastNews);
  // const renderTodo = currentTodo.map((item) => {
  //   return (
  //     <ViewItem
  //       key={item.id}
  //       item={item}
  //       title={item.title}
  //       isComplete={item.isComplete}
  //     />
  //   );
  // });
  // const pageNumbers = [];
  // for (let i = 1; i <= Math.ceil(keyWordSearch.length / newsPerPage); i++) {
  //   pageNumbers.push(i);
  // }

  // const chosePage = (event) => {
  //   setCurrentPage(Number(event.target.id));
  // };

  return (
    <div>
      {/* <SearchHeader onChange={handleChange} /> */}
      {/* <Header /> */}
      {/* {renderTodo}
      <Paging
        pageNumbers={pageNumbers}
        currentPage={currentPage}
        chosePage={chosePage}
      /> */}
      {/* <Footer onSetStatus={onSetStatus} status={status} todoList={todoList} /> */}
      {todoListNewToolkit.map((item) => {
        return <p key={item.id}>{item.title}</p>;
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    todoList: getVisibleTodo(state),
    // todoList: state.todoList,
    showStatus: state.ShowStatus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showStatus: (status) => {
      dispatch(action.ON_SHOW_STATUS(status));
    },
    getList: () => {
      dispatch(action.ON_GET_LIST_TODO_SAGA());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
Todo.propTypes = {
  onSetStatus: PropTypes.func,
  handleChange: PropTypes.func,
  showStatus: PropTypes.func,
};
Todo.defaultPros = {
  todoList: [],
  search: "",
  status: "",
};
