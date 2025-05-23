import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <div className="min-h-screen bg-gradient-to-tl from-black via-gray-900 to-black flex flex-col items-center justify-center text-white text-center px-4 py-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 animate-pulse">
                Bienvenido al Universo de Rick & Morty
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-8 text-gray-400 max-w-md sm:max-w-lg">
                Explora todos los personajes, sus mundos y sus historias interdimensionales.
            </p>
            <Link 
                to="/characters" 
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-full transition duration-200"
            >
                Empezar a explorar
            </Link>
        </div>
    );
};

export default Welcome;
