import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { PokemonProperties } from '../../interface';
import { RootState } from '../../store';
import { addPokemon, removePokemon } from '../pokemonSlice';

const About = () => {
  const pokemonList = useSelector((state: RootState) => state.pokemon);
  const [selected, setSelected] = useState<number[]>(() => {
    return pokemonList.map((pokemon) => pokemon.id);
  });
  const dispatch = useDispatch();
  const pokemons = useSelector((state: RootState) => state.pokemon);
  const addToCart = (pokemon: PokemonProperties) => {
    console.log('addToCart dduowjc goi ', selected);
    setSelected((prev) => {
      const isSelected = prev.includes(pokemon.id);
      if (isSelected) {
        dispatch(removePokemon(pokemon));
        return selected.filter((id) => id !== pokemon.id);
      } else {
        dispatch(addPokemon(pokemon));
        return [...prev, pokemon.id];
      }
    });
  };
  return (
    <div>
      <div className="container">
        <div className="text-center mt-5">
          <h1>List pokemon</h1>
          <div className="row">
            {pokemons.map((poke) => (
              <div className="col-3 card-container" key={poke.id}>
                <Card>
                  <Card.Img
                    variant="top"
                    src={poke.sprites.other['official-artwork'].front_default}
                  />
                  <Card.Body>
                    <Card.Title className="card-title">{poke.name}</Card.Title>
                    <div className="btn-container"></div>
                  </Card.Body>

                  <Button
                    size="sm"
                    variant={selected.includes(poke.id) ? 'success' : 'warning'}
                    className="text-decoration-none btn text-dark font-italic"
                    onClick={() => addToCart(poke)}
                  >
                    {selected.includes(poke.id) ? 'Remove' : 'Add Cart'}
                  </Button>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
