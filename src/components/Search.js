import React from "react";

export const Search = ({ placeholder }) => {
  return (
      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder={placeholder}
          aria-label="Search"
        ></input>
      </form>
  );
};
