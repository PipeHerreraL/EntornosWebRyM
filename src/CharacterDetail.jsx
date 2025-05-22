import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const CharacterDetail = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(res => res.json())
            .then(data => setCharacter(data));
    }, [id]);

    if (!character) return <p className="text-white p-4">Cargando personaje...</p>;

    return (
        <div className="min-h-screen bg-gray-900 text-white p-6">
            <Link to="/" className="text-blue-400 hover:underline">&larr; Volver</Link>
            <div className="mt-6 flex flex-col md:flex-row bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <img src={character.image} alt={character.name} className="w-full md:w-64 object-cover" />
                <div className="p-6 flex flex-col justify-between">
                    <h2 className="text-3xl font-bold mb-4">{character.name}</h2>
                    <p><strong>Status:</strong> {character.status}</p>
                    <p><strong>Species:</strong> {character.species}</p>
                    <p><strong>Gender:</strong> {character.gender}</p>
                    <p><strong>Origin:</strong> {character.origin?.name}</p>
                    <p><strong>Location:</strong> {character.location?.name}</p>
                </div>
            </div>
        </div>
    );
};

export default CharacterDetail;
