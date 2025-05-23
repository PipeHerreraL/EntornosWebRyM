import React, { Fragment} from 'react';
import { Navigate, useSearchParams } from 'react-router-dom';
import Card from '../components/Card';
import PaginationControls from '../components/PaginationControls';
import { useFetchWithNotFound } from '../hooks/useFetchWithNotFound';

const CharacterList = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const pageParam = parseInt(searchParams.get('page')) || 1;

    const { data, notFound, loading } = useFetchWithNotFound(`https://rickandmortyapi.com/api/character?page=${pageParam}`);

    if (notFound) {
        return <Navigate to="/notfound" />;
    }
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
                <p className="text-xl animate-pulse">Cargando personajes<span className="animate-ping">...</span></p>
            </div>
        );
    }


    const characters = data.results;
    const pageInfo = data.info;

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
