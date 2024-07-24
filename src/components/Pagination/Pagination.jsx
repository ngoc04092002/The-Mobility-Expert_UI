import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "../../assets/icons";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // Adjust based on your data

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex justify-end">
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex items-center !mr-12"
        >
          <ChevronLeft className="mr-2" /> Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex items-center !ml-12 !mr-0"
        >
          Next <ChevronRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
