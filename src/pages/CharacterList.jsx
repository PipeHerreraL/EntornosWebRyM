import React, { Fragment, useEffect, useState } from 'react';
import { Navigate, useSearchParams } from 'react-router-dom';
import Card from '../components/Card';
import PaginationControls from '../components/PaginationControls';

const CharacterList = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const pageParam = parseInt(searchParams.get('page')) || 1;

    const [characters, setCharacters] = useState([]);
    const [pageInfo, setPageInfo] = useState({ pages: 1, next: null, prev: null });

    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(`https://rickandmortyapi.com/api/character?page=${pageParam}`);
            const response = await data.json();

            if (response.error) {
                setNotFound(true);
                return;
            }

            if (response && response.results) {
                setCharacters(response.results);
                setPageInfo(response.info);
            }
        };

        fetchData().catch(console.error);
    }, [pageParam]);

    if (notFound) {
        return <Navigate to="/notfound" replace />;
    }

    return (
        <Fragment>
            <section className="h-96 dark:bg-gray-800 grid place-content-center">
                <p className='text-8xl font-black text-white'>The Rick and Morty API</p>
            </section>

            <PaginationControls className="mt-12" pageParam={pageParam} pageInfo={pageInfo} setSearchParams={setSearchParams} />

            <div className="grid grid-cols-2 mt-8 mx-28 mb-8 gap-6">
                {characters.map(character => (
                    <Card key={character.id} character={character} currentPage={pageParam} />
                ))}
            </div>

            <PaginationControls className="mb-12" pageParam={pageParam} pageInfo={pageInfo} setSearchParams={setSearchParams} />
        </Fragment>
    );
};

export default CharacterList;
