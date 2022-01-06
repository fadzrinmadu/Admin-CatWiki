import React from "react";
import { Pagination } from "@themesberg/react-bootstrap";

export default ({ postsPerPage, totalPosts, page, setPage }) => {
  let pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination className="mb-2 mb-lg-0">
      {pageNumbers.map(number => (
        <Pagination.Item
          onClick={() => setPage(number)}
          active={page === number}
        >
          {number}
        </Pagination.Item>
      ))}
    </Pagination>
  );
};
