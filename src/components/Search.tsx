import React, { useEffect, useState } from "react";
import pokeApi from "../api/pokeApi";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import { setPokemonFilter } from "../features/pokemons/pokemonsSlice";
import useDebounce from "../hooks/Debounce";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const dispatch = useAppDispatch();
  const pokeData = useAppSelector((state: RootState) => state.pokemon);
  const debounceSearch = useDebounce(searchTerm, 1000);

  useEffect(() => {
    if (debounceSearch) {
      dispatch(
        setPokemonFilter(
          pokeApi.filterSearch(debounceSearch, pokeData.listPokemon)
        )
      );
    } else {
      dispatch(setPokemonFilter([]));
    }
  }, [debounceSearch]);

  return (
    <div>
      <div className="input-group">
        <input
          type="text"
          className="form-control rounded"
          placeholder="Search name of Pokemon.."
          aria-label="Search"
          aria-describedby="search-addon"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {/* <button type="button" className="btn btn-outline-primary">
          Search
        </button> */}
      </div>
    </div>
  );
};

export default Search;
