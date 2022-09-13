/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import "./Pagination.css";

export const Pagination = ({tableElements,numberElements, currentPage, setCurrentPage}) => {

  const rowsPage = [];
  const maxPage = Math.ceil(numberElements/tableElements)
  const makePages = () => {
    for (let index = 1; index <= maxPage; index++) {
      index === currentPage
        ? rowsPage.push(
            ...rowsPage,
            <li key={index}  className="page-item active">
              <span className="page-link" href="#">
                {index}
              </span>
            </li>
          )
        : rowsPage.push(
            ...rowsPage,
            <li key={index} className="page-item">
              <span className="page-link" href="#">
                {index}
              </span>
            </li>
          );
    }
  };

  useEffect(() => {
    makePages();
  },[currentPage])

  return (
    <ul className="pagination justify-content-end">
      <li className="page-item disabled">
        <span className="page-link">Previous</span>
      </li>
        {rowsPage.map((page) => {return page})}
      <li className="page-item">
        <span className="page-link" href="#">
          Next
        </span>
      </li>
    </ul>
  );
};
