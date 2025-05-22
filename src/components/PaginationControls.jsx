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
        <div className={`flex justify-center gap-6 ${className}`}>
            <button 
            onClick={handleFirst} 
            disabled={pageParam === 1} 
            className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50 disabled:pointer-events-none hover:bg-gray-600 transition duration-200">
                First
            </button>

            <button 
            onClick={handlePrev} 
            disabled={!pageInfo.prev} 
            className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50 disabled:pointer-events-none hover:bg-gray-600 transition duration-200">
                Prev
            </button>

            <span className="text-lg font-medium text-gray-800 dark:text-gray-200">Page {pageParam}</span>
            
            <button 
            onClick={handleNext} 
            disabled={!pageInfo.next} 
            className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50 disabled:pointer-events-none hover:bg-gray-600 transition duration-200">
                Next
            </button>

            <button 
            onClick={handleLast} 
            disabled={pageParam === pageInfo.pages} 
            className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50 disabled:pointer-events-none hover:bg-gray-600 transition duration-200">
                Last
            </button>
        </div>
    );
};

export default PaginationControls;
