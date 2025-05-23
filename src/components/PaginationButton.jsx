import React from 'react';

const PaginationButton = ({ onClick, disabled, children }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className="px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm bg-gray-700 text-white rounded-md transition duration-200 hover:bg-gray-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none"
  >
    {children}
  </button>
);

export default PaginationButton;
