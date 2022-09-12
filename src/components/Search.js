import React from "react";

export const Search = ({ placeholder }) => {
  return (
      <form class="form-inline">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder={placeholder}
          aria-label="Search"
        ></input>
      </form>
  );
};
