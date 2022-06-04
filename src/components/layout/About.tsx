import React from 'react';
import { useSelector } from 'react-redux';

import { PokemonProperties } from '../../interface';
import { RootState } from '../../store';

const About = () => {
  const pokemons = useSelector((state: RootState) => state.pokemon);
  return (
    <div>
      <div className="container">
        <div className="text-center mt-5">
          <h1>A Bootstrap 5 Starter Template</h1>
          <p className="lead">
            {pokemons.selected.map((poke) => (
              <h1 key={poke}>{poke}</h1>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
