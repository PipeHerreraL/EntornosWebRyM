import React, { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';

const CharacterDetail = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);
    const [firstEpisode, setFirstEpisode] = useState(null);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {

        if (!id || isNaN(id) || id < 1) {
            setNotFound(true);
            return;
        }

        const fetchData = async () => {
            const data = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
            const response = await data.json();

            if (response.error) {
                setNotFound(true);
                return;
            }

            setCharacter(response);

            if (Array.isArray(response.episode) && response.episode.length > 0) {
                const episodeData = await fetch(response.episode[0]);
                const episodeResponse = await episodeData.json();
                setFirstEpisode(episodeResponse.name);
            }
        };

        fetchData();
    }, [id]);

    if (notFound) {
        return <Navigate to="/notfound" replace/>
    }

    if (!character) return <p className="text-white p-4">Cargando personaje...</p>;

    return (
        <div className="min-h-screen bg-gray-900 text-white p-6">
            <Link to="/characters" className="text-blue-400 hover:underline">&larr; Volver</Link>
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
