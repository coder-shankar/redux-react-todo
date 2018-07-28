import React from "react";
import fetchData from "../service/todoServices";
const SearchBox = () => {
  return (
    <input
      type="text"
      placeholder="search ..."
      onChange={async e => {
        let res = await fetchData("?title=" + e.target.value);
        console.log(res.data.data);
      }}
    />
  );
};

export default SearchBox;
