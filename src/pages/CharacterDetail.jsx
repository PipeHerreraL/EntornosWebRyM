import { useEffect, useState } from 'react';
import { useParams, Link, Navigate, useSearchParams } from 'react-router-dom';
import { useFetchWithNotFound } from '../hooks/useFetchWithNotFound';

const CharacterDetail = () => {
    const { id } = useParams();
    const [searchParams] = useSearchParams();
    const pageParam = searchParams.get('page') || '1';

    const { data: character, notFound } = useFetchWithNotFound(`https://rickandmortyapi.com/api/character/${id}`);
    const [firstEpisode, setFirstEpisode] = useState(null);

    useEffect(() => {
    const fetchFirstEpisode = async () => {
        try {
            if (character && Array.isArray(character.episode) && character.episode.length > 0) {
                const response = await fetch(character.episode[0]);
                const firstEpisode = await response.json();
                setFirstEpisode(firstEpisode.name);
            }
        } catch (error) {
            setFirstEpisode('Unknown');
        }
    };

    fetchFirstEpisode();
}, [character]);

    if (notFound) {
        return <Navigate to="/notfound" replace/>
    }

    if (!character) {
        return <p className="text-white p-4">Cargando personaje...</p>;
    }

    return (
        <div className="min-h-screen bg-gray-900 text-white p-6">
            <Link to={`/characters?page=${pageParam}`} className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition duration-200">&larr; Volver</Link>
            <div className="mt-6 flex flex-col md:flex-row bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <img src={character.image} alt={character.name} className="w-full md:w-64 object-cover" />
                <div className="p-6 flex flex-col justify-between">
                    <h2 className="text-3xl font-bold mb-4">{character.name}</h2>
                    <p><strong>Status:</strong> {character.status}</p>
                    <p><strong>Species:</strong> {character.species}</p>
                    <p><strong>Type:</strong> {character.type || 'Unknown'}</p>
                    <p><strong>Gender:</strong> {character.gender}</p>
                    <p><strong>Origin:</strong> {character.origin?.name}</p>
                    <p><strong>Location:</strong> {character.location?.name}</p>
                    <p><strong>First Episode:</strong> {firstEpisode || 'Cargando...'}</p>
                </div>
            </div>
        </div>
    );
};

export default CharacterDetail;
