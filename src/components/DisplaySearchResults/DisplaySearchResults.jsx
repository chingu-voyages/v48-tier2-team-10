import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import usePagination from "../Pagination/usePagination";
import Pagination from "../Pagination/Pagination";

export default function DisplaySearchResults({ filteredData, currentItems }) {
  console.log(currentItems);
  return (
    <div>
      <p>{filteredData.length} dinos</p>

      {currentItems &&
        currentItems.map((dino, index) => <li key={index}>{dino.name}</li>)}

      {/* <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      /> */}
    </div>
  );
}
