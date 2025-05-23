import React from 'react';
import PaginationButton from './PaginationButton';

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
            <PaginationButton onClick={handleFirst} disabled={pageParam === 1}>
                First
            </PaginationButton>

            <PaginationButton onClick={handlePrev} disabled={!pageInfo.prev}>
                Prev
            </PaginationButton>

            <span className="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-200 px-2">
                Page {pageParam}
            </span>

            <PaginationButton onClick={handleNext} disabled={!pageInfo.next}>
                Next
            </PaginationButton>

            <PaginationButton onClick={handleLast} disabled={pageParam === pageInfo.pages}>
                Last
            </PaginationButton>
        </div>
    );
};

export default PaginationControls;
