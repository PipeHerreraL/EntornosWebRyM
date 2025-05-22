import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <div className="min-h-screen bg-gradient-to-tl from-black via-gray-900 to-black flex flex-col items-center justify-center text-white text-center p-8">
            <h1 className="text-5xl font-extrabold mb-6 animate-pulse">Bienvenido al Universo de Rick & Morty</h1>
            <p className="text-xl mb-8 text-gray-400 max-w-xl">
                Explora todos los personajes, sus mundos y sus historias interdimensionales.
            </p>
            <Link to="/characters" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition">
                Empezar a explorar
            </Link>
        </div>
    );
};

export default Welcome;
