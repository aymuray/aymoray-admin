import React, { useEffect, useState } from "react";
import "./Pagination.css";

export const Pagination = ({length,numberElements,selected}) => {
  const [maxPage, setMaxpage] = useState(1)
  const arrayPagination = [];
  const CrearPaginacion = (maxPage, selected) => {
    for (let index = 1; index <= maxPage; index++) {
      index === selected
        ? arrayPagination.push(
            ...arrayPagination,
            <li key={index}  className="page-item active">
              <span className="page-link" href="#">
                {index}
              </span>
            </li>
          )
        : arrayPagination.push(
            ...arrayPagination,
            <li key={index} className="page-item">
              <span className="page-link" href="#">
                {index}
              </span>
            </li>
          );
    }
  };
  useEffect(() => {
    setMaxpage(Math.ceil(length/numberElements))
    CrearPaginacion(maxPage, selected);
  }, [length,numberElements,selected]);

  return (
    <ul className="pagination justify-content-end">
      <li className="page-item disabled">
        <span className="page-link">Previous</span>
      </li>
      {arrayPagination.map((page) => page)}
      <li className="page-item">
        <span className="page-link" href="#">
          Next
        </span>
      </li>
    </ul>
  );
};
