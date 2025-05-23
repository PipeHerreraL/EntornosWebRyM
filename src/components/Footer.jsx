import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-300 text-green-700 dark:bg-gray-800 dark:text-gray-400 text-center text-xs sm:text-sm py-3 sm:py-4 mt-auto">
            <p>&copy; {new Date().getFullYear()} Rick and Morty Explorer. Todos los derechos reservados.</p>
        </footer>
    );
};

export default Footer;
