import React from "react";
import fetchData from "../service/todoServices";

const SearchBox = prop => (
  <input
    type="text"
    placeholder="search ..."
    onChange={async e => {
      const res = await fetchData("?title=" + e.target.value);
      prop.addTodo(res.data.data);
    }}
  />
);

export default SearchBox;
