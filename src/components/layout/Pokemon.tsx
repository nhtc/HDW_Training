import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../css/pokemon.css';
import { PokemonProperties } from '../../interface';
import { AppDispatch, RootState, useSelector } from '../../store';
import { addPokemon, getPokemons, IDefaultState } from '../pokemonSlice';

const Pokemon: React.FC = () => {
  const pokemonList = useSelector((state: RootState) => state.pokemon);
  const [pokemons, setPokemons] = useState<IDefaultState>();
  const [selected, setSelected] = useState<number[]>(() => {
    return pokemonList.listPokemon.map(
      (pokemon: PokemonProperties) => pokemon.id
    );
  });
  const dispatch: AppDispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  const addToCart = (pokemon: PokemonProperties) => {
    console.log('addToCart dduowjc goi ', selected);
    setSelected((prev) => {
      const isSelected = prev.includes(pokemon.id);
      // if (isSelected) {
      //   dispatch(removePokemon(pokemon));
      //   return selected.filter((id) => id !== pokemon.id);
      // } else {
      //   dispatch(addPokemon(pokemon));
      //   return [...prev, pokemon.id];
      // }
      dispatch(addPokemon(pokemon));
      return [...prev, pokemon.id];
    });
  };

  return (
    <div className="container ">
      <div className="row d-flex justify-content-center">
        {pokemons?.listPokemon.map((pokemon) => {
          return (
            <div className="col-1 card-container" key={pokemon.id}>
              <Card>
                <Card.Img variant="top" src={pokemon.sprites.front_default} />
                <Card.Body>
                  <Card.Title className="card-title">{pokemon.name}</Card.Title>
                  <div className="btn-container">
                    <Button variant="info" size="sm" className="btn">
                      <Link
                        className="text-decoration-none text-dark font-italic"
                        to={`/collection/${pokemon.name}`}
                        state={{
                          pokemon,
                        }}
                      >
                        Detail
                      </Link>
                    </Button>
                    <Button
                      size="sm"
                      variant={
                        selected.includes(pokemon.id) ? 'success' : 'warning'
                      }
                      className="text-decoration-none btn text-dark font-italic"
                      onClick={() => addToCart(pokemon)}
                    >
                      {selected.includes(pokemon.id) ? 'Remove' : 'Add Cart'}
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pokemon;
