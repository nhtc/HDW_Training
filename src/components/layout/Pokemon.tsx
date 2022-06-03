import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { PokemonProperties, PokemonInfo } from '../../interface';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../css/pokemon.css';
import { useDispatch, useSelector } from 'react-redux';
import { addPokemon, removePokemon } from '../pokemonSlice';
import { RootState } from '../../store';
const Pokemon: React.FC = () => {
  const pokemonList = useSelector((state: RootState) => state.pokemon);
  const [pokemons, setPokemons] = useState<PokemonProperties[]>([]);
  const [selected, setSelected] = useState<number[]>(() => {
    return pokemonList.map((pokemon) => pokemon.id);
  });
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('useEffect called');
    (async () => {
      await axios
        .get('https://pokeapi.co/api/v2/pokemon?limit=50&offset=20')
        .then((response) =>
          response.data.results.forEach(async (pokemon: PokemonInfo) => {
            await axios
              .get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
              .then((response) =>
                setPokemons((prevState) => [...prevState, response.data])
              );
          })
        )
        .catch((err) => console.log(err));
    })();
  }, []);

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
    <div className="container ">
      <div className="row d-flex justify-content-center">
        {pokemons.map((pokemon) => {
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
