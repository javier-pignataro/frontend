import React from "react";

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {

  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const goToNextPage = () => {
    e.preventDefault(); 

    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const goToPrevPage = () => {
    e.preventDefault(); 

    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  return (
    <div className="container__paginator">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" onClick={goToPrevPage} href="#">
            Previous
          </a>
        </li>
        {pageNumbers.map((pgNumber) => (
          <li key={pgNumber} className={`page-item ${currentPage == pgNumber ? "active" : ""} `}>
            <a onClick={() => setCurrentPage(pgNumber)} className="page-link" href="#">
              {pgNumber}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a className="page-link" onClick={goToNextPage} href="#">
            Next
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
