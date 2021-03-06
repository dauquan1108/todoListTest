import React, { useState } from "react";
import PropTypes from "prop-types";

function SearchHeader(props) {
  const { onChange } = props;
  const [search, setSearch] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
    onChange(event);
  };

  return (
    <div
      className="searchTodo"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={search}
          onChange={handleChange}
          placeholder="Tìm kiếm"
        />
      </form>
    </div>
  );
}
export default SearchHeader;
SearchHeader.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
};
SearchHeader.defaultPros = {
  search: "",
};
