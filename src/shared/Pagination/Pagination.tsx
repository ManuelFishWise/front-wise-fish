import React from "react";
import './Pagination.css'

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  handlePageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  handlePageChange,
}) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    const numAdjacentNumbers = Math.floor(maxVisiblePages / 2);

    let startPage = Math.max(1, currentPage - numAdjacentNumbers);
    let endPage = Math.min(totalPages, currentPage + numAdjacentNumbers);

    if (currentPage - numAdjacentNumbers <= 1) {
      endPage = Math.min(totalPages, maxVisiblePages);
    }

    if (currentPage + numAdjacentNumbers >= totalPages) {
      startPage = Math.max(1, totalPages - maxVisiblePages + 1);
    }

    if (startPage > 1) {
      pageNumbers.push(
        <button className="pagination-number" key={1} onClick={() => handlePageChange(1)}>
          1
        </button>
      );
      if (startPage > 2) {
        pageNumbers.push(<span key="startEllipsis">...</span>);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`pagination-number ${i === currentPage ? "active" : ""}`}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pageNumbers.push(<span key="endEllipsis">...</span>);
      }
      pageNumbers.push(
        <button className="pagination-number" key={totalPages} onClick={() => handlePageChange(totalPages)}>
          {totalPages}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="pagination">
      <button
        onClick={() => handlePageChange(1)}
        disabled={currentPage === 1}
        className={`pagination-button ${currentPage === 1 ? "disabled" : ""}`}
      >
        {"<<"}
      </button>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`pagination-button ${currentPage === 1 ? "disabled" : ""}`}
      >
        {"<"}
      </button>
      {renderPageNumbers()}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`pagination-button ${
          currentPage === totalPages ? "disabled" : ""
        }`}
      >
        {">"}
      </button>
      <button
        onClick={() => handlePageChange(totalPages)}
        disabled={currentPage === totalPages}
        className={`pagination-button ${
          currentPage === totalPages ? "disabled" : ""
        }`}
      >
        {">>"}
      </button>
    </div>
  );
};

export default Pagination;
