import React, { useEffect, useState } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { useFetchWithNotFound } from '../hooks/useFetchWithNotFound';
import _ from 'lodash';

const CharacterDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

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
        } catch {
            setFirstEpisode('Unknown');
        }
    };

    fetchFirstEpisode();
}, [character]);

    if (notFound) {
        return <Navigate to="/notfound" />
    }

    if (!character) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
                <p className="text-xl animate-pulse">Cargando personaje<span className="animate-ping">...</span></p>
            </div>
        ); 
    }

    return (
        <div className="bg-gray-900 text-white p-4 sm:p-6">
            <button
                onClick={() => navigate(-1)}
                className="mb-4 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition duration-200
                        max-sm:px-2 max-sm:py-1 max-sm:text-sm max-sm:rounded-md"
            >
                &larr; Volver
            </button>

            <div className="flex flex-col md:flex-row bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <img
                    src={character.image}
                    alt={character.name}
                    className="w-full h-60 md:h-auto md:w-64 object-cover"
                />
                <div className="p-4 sm:p-6 flex flex-col justify-between text-sm sm:text-base">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">{character.name}</h2>
                    <p><strong>Status:</strong> {_.capitalize(character.status)}</p>
                    <p><strong>Species:</strong> {_.capitalize(character.species)}</p>
                    <p><strong>Type:</strong> {_.capitalize(character.type) || 'Unknown'}</p>
                    <p><strong>Gender:</strong> {_.capitalize(character.gender)}</p>
                    <p><strong>Origin:</strong> {_.capitalize(character.origin?.name)}</p>
                    <p><strong>Location:</strong> {_.capitalize(character.location?.name)}</p>
                    <p><strong>First Episode:</strong> {firstEpisode || 'Cargando...'}</p>
                </div>
            </div>
        </div>
    );
};

export default CharacterDetail;
