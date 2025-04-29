import { ChevronsLeft, ChevronsRight } from 'lucide-react';
import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div>
      <nav className="flex justify-center mt-4">
        <ul className="flex space-x-2">
          <li>
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className="px-4 py-2 text-gray-600 rounded-md disabled:opacity-50"
            >
              <ChevronsLeft size={20} />
            </button>
          </li>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <li key={page}>
              <button
                onClick={() => onPageChange(page)}
                className={`px-4 py-2 rounded-md ${
                    currentPage === page ? 'bg-[#FFA09B] text-white' : 'bg-gray-200 hover:bg-gray-300'
                }`}
                >
                {page}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="px-4 py-2 text-gray-600 rounded-md disabled:opacity-50"
            >
              <ChevronsRight size={20} />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;