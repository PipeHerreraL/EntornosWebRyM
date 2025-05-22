import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-black text-green-400 flex flex-col items-center justify-center text-center p-6">
            <h1 className="text-6xl font-extrabold mb-4 glitch">404</h1>
            <h2 className="text-2xl mb-4">¡Esta dimensión no existe!</h2>
            <p className="text-gray-500 mb-6">Parece que Rick movió el portal a otro lado...</p>
            <Link to="/" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-5 rounded">
                Volver al portal
            </Link>
        </div>
    );
};

export default NotFound;
