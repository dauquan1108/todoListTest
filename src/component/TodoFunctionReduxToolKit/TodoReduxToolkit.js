import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
// react-redux
import { connect } from "react-redux";

// selectors
import { getActiveTodo } from "../../selectors/TodoSelectors";

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
import Test from "./Test";
// redux toolkit
import { getDataTodo } from "./reducersSlice";

// style
import "./style/styleTodoReduxToolkit.css";

// redux toolkit
import { useSelector, useDispatch } from "react-redux";
import { todoListToolkit } from "./reducersSlice";

function Todo(props) {
  const { todoListReduxToolkit } = props;
  const dispatch = useDispatch();

  // redux toolkit
  const todoListNewToolkit = useSelector(todoListToolkit);

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

  //search;
  const [search, setSearch] = useState("");
  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  const keyWordSearch = todoListReduxToolkit.filter((item) => {
    return item.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });

  // lay id bi loi
  const [idItem, setIdItem] = useState();
  const getIdError = (id) => {
    setIdItem(id);
  };

  // Phan trang
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage, setNewsPerPage] = useState(5);
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentTodo = keyWordSearch.slice(indexOfFirstNews, indexOfLastNews);
  const renderTodo = currentTodo.map((item, index) => {
    return (
      <div key={item.id}>
        {(index === 3 || index === 4) && <Test text="Quảng cáo" />}
        <ViewItem
          getIdError={getIdError}
          key={item.id}
          item={item}
          title={item.title}
          isComplete={item.isComplete}
        />
      </div>
    );
  });
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(keyWordSearch.length / newsPerPage); i++) {
    pageNumbers.push(i);
  }

  const chosePage = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  return (
    <div>
      <SearchHeader onChange={handleChange} />
      <Header />
      {renderTodo}
      <Paging
        pageNumbers={pageNumbers}
        currentPage={currentPage}
        chosePage={chosePage}
      />
      <Footer
        todoList={todoListNewToolkit}
        getIdError={getIdError}
        idItem={idItem}
      />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    todoListReduxToolkit: getActiveTodo(state),
  };
};

export default connect(mapStateToProps, null)(Todo);
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
