import React, { Fragment, useEffect, useState } from 'react';
import Card from '../components/Card';

const CharacterList = () => {

    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);
    const [pageInfo, setPageInfo] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
            const response = await data.json();
    
            if (response && response.results) {
            setCharacters(response.results);
            setPageInfo(response.info)
            }
        }
    
        // llamar la función
        fetchData()
        // capturar el error
        .catch(console.error);
    }, [page])

    const handleNext = () => {
        if (pageInfo.next) setPage((prev) => prev + 1);
    };
    
    const handlePrev = () => {
        if (pageInfo.prev) setPage((prev) => prev - 1);
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
                {
                characters.map(character => (
                    <Card key={character.id} character={character} />
                ))
                }
            </div>

            <div className="flex justify-center gap-6 mb-12">
                <button
                onClick={handleFirst}
                disabled={page === 1}
                className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
                >
                    First
                </button>
                <button
                onClick={handlePrev}
                disabled={!pageInfo.prev}
                className="px-6 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
                >
                    Prev
                </button>
                <span className="text-lg font-medium text-gray-800 dark:text-gray-200">Page {page}</span>
                <button
                onClick={handleNext}
                disabled={!pageInfo.next}
                className="px-6 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
                >
                    Next
                </button>
                <button
                onClick={handleLast}
                disabled={page === pageInfo.pages}
                className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
                >
                    Last
                </button>
            </div>
        </Fragment>
    );
};

export default CharacterList;
