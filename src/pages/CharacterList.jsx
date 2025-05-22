import React, { Fragment, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Card from '../components/Card';

const CharacterList = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const pageParam = parseInt(searchParams.get('page')) || 1;

    const [characters, setCharacters] = useState([]);
    const [pageInfo, setPageInfo] = useState({ pages: 1, next: null, prev: null });

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(`https://rickandmortyapi.com/api/character?page=${pageParam}`);
            const response = await data.json();

            if (response && response.results) {
                setCharacters(response.results);
                setPageInfo(response.info);
            }
        };

        fetchData().catch(console.error);
    }, [pageParam]);

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
        <Fragment>
            <section className="h-96 dark:bg-gray-800 grid place-content-center">
                <p className='text-8xl font-black text-white'>The Rick and Morty API</p>
            </section>

            <div className="grid grid-cols-2 mt-20 mx-28 mb-8 gap-6">
                {characters.map(character => (
                    <Card key={character.id} character={character} currentPage={pageParam} />
                ))}
            </div>

            <div className="flex justify-center gap-6 mb-12">
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
        </Fragment>
    );
};

export default CharacterList;
