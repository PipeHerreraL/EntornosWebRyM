import React from 'react';

const PaginationControls = ({ className = '', pageParam, pageInfo, setSearchParams}) => {

    const setPage = (newPage) => {
        setSearchParams({ page: newPage.toString() });
    };
    
    const handleNext = () => {
        if (pageInfo.next) setPage(pageParam + 1);
    };
    
    const handlePrev = () => {
        if (pageInfo.prev) setPage(pageParam - 1);
    };
    
    const handleFirst = () => {
        setPage(1);
    };
    
    const handleLast = () => {
        if (pageInfo.pages) {
            setPage(pageInfo.pages);
        }
    };

    return (
        <div className={`flex flex-wrap justify-center items-center gap-2 sm:gap-4 ${className}`}>
            <button 
                onClick={handleFirst} 
                disabled={pageParam === 1} 
                className="px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm bg-gray-700 text-white rounded-md transition duration-200 hover:bg-gray-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none"
            >
                First
            </button>

            <button 
                onClick={handlePrev} 
                disabled={!pageInfo.prev} 
                className="px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm bg-gray-700 text-white rounded-md transition duration-200 hover:bg-gray-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none"
            >
                Prev
            </button>

            <span className="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-200 px-2">
                Page {pageParam}
            </span>

            <button 
                onClick={handleNext} 
                disabled={!pageInfo.next} 
                className="px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm bg-gray-700 text-white rounded-md transition duration-200 hover:bg-gray-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none"
            >
                Next
            </button>

            <button 
                onClick={handleLast} 
                disabled={pageParam === pageInfo.pages} 
                className="px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm bg-gray-700 text-white rounded-md transition duration-200 hover:bg-gray-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none"
            >
                Last
            </button>
        </div>
    );
};

export default PaginationControls;
