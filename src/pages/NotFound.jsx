import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen dark:bg-black text-green-600 dark:text-green-400 flex flex-col items-center justify-center text-center px-4 py-10">
            <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 glitch">404</h1>
            <h2 className="text-xl sm:text-2xl mb-4">¡Esta dimensión no existe!</h2>
            <p className="text-xs sm:text-base text-green-700 dark:text-gray-500 mb-6">
                Parece que Rick movió el portal a otro lado...
            </p>

            <div className="flex flex-wrap justify-center gap-3 w-full max-w-xs sm:max-w-none">
                <button
                    onClick={() => navigate(-1)}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 text-sm rounded"
                >
                    Volver atrás
                </button>
                <Link
                    to="/"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white text-white font-bold py-2 px-4 text-sm rounded text-center"
                >
                    Volver al portal
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
