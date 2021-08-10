import React, { useState } from "react";

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
      className="SearchTodo"
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
