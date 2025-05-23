import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-300 text-green-700 dark:bg-gray-800 dark:text-gray-400 text-xs sm:text-sm py-3 sm:py-4 mt-auto">
            <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
                <div className="flex space-x-4">
                    <a
                        href="https://github.com/PipeHerreraL"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="hover:text-green-900 dark:hover:text-white"
                    >
                        <FaGithub size={20} />
                    </a>
                    <a
                        href="https://linkedin.com/in/juan-felipe-lópez-herrera-291525226"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="hover:text-green-900 dark:hover:text-white"
                    >
                        <FaLinkedin size={20} />
                    </a>
                </div>
                <p className="text-right whitespace-nowrap">
                    Juan López &#10094;&#10095; {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
