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
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-white mb-4"></div>
                <p className="text-lg font-medium animate-pulse">Cargando personajes...</p>
            </div>
        );
    }


    const characters = data.results;
    const pageInfo = data.info;

    return (
        <Fragment>
            <section className="h-32 sm:h-38 md:h-40 bg-gradient-to-r from-green-700 via-emerald-600 dark:via-emerald-800 to-green-700 flex items-center justify-center shadow-md text-center px-4">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-md animate-fade-in break-words">
                    The Rick and Morty API
                </h1>
            </section>

            <div className="px-4 sm:px-6 md:px-12">
                <PaginationControls 
                    className="mt-10 hidden md:flex" 
                    pageParam={pageParam} 
                    pageInfo={pageInfo} 
                    setSearchParams={setSearchParams} 
                />

                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8 mb-12 gap-6">
                    {characters.map(character => (
                        <Card key={character.id} character={character} />
                    ))}
                </div>

                <PaginationControls 
                    className="mb-10" 
                    pageParam={pageParam} 
                    pageInfo={pageInfo} 
                    setSearchParams={setSearchParams} 
                />
            </div>
        </Fragment>
    );
};

export default CharacterList;
