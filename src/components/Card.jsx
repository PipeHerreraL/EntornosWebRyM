import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({character, currentPage}) => {
    
    const { id, name, status, species, image} = character;

    return (
        <Link to={`/characters/${id}`}>
            <div className="flex flex-col h-full bg-white border border-gray-200 rounded-lg shadow md:flex-row max-w-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img
                    className="object-cover w-full h-48 md:h-auto md:w-48 md:rounded-none rounded-t-lg md:rounded-l-lg"
                    src={image}
                    alt={`Imagen de ${name}`}
                />
                <div className="flex flex-col justify-between items-center text-center p-4 md:p-6 leading-normal flex-grow">
                    <div className="w-full mb-2">
                        <h5 className="text-sm sm:text-lg md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {name}
                        </h5>
                    </div>
                    <div className="space-y-1">
                        <p className="text-xs sm:text-sm md:text-base lg:text-lg font-normal text-gray-700 dark:text-gray-400 whitespace-nowrap">
                            {status}
                        </p>
                        <p className="text-xs sm:text-sm md:text-base lg:text-lg font-normal text-gray-700 dark:text-gray-400 whitespace-nowrap">
                            {species}
                        </p>
                    </div>
                </div>
            </div>
        </Link>


    )
}

export default Card