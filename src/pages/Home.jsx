import React, { Fragment, useEffect, useState } from 'react';
import Card from '../components/Card';

const Home = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch('https://rickandmortyapi.com/api/character');
            const response = await data.json();
    
            if (response && response.results) {
            setCharacters(response.results);
            }
        }
    
        // llamar la función
        fetchData()
        // capturar el error
        .catch(console.error);
    }, [])

    return (
        <Fragment>
            <section className="h-96 dark:bg-gray-800 grid place-content-center">
                <p className='text-8xl font-black text-white'>The Rick and Morty API</p>
            </section>

            <div className="grid grid-cols-2 mt-20 mx-28  gap-6">
                {
                characters.map(character => (
                    <Card key={character.id} character={character} />
                ))
                }
            </div>
        </Fragment>
    );
};

export default Home;
