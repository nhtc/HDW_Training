import {
  PokemonDesPcription,
  PokemonList,
  PokemonTypes,
  ResponseAllPokemon,
} from "../types/pokemonInterface";
import axiosClient from "./axiosClient";

const pokeApi = {
  getPokemon(offset: number, limit: number): Promise<ResponseAllPokemon> {
    const url = `/pokemon/?offset=${offset}&limit=${limit}`;
    return axiosClient.get(url);
  },
  getDetailPokemonById: (id: number): Promise<PokemonTypes> => {
    const url = `/pokemon/${id}`;
    return axiosClient.get(url);
  },
  getDetailPokemonByName: (name: string): Promise<PokemonTypes> => {
    const url = `/pokemon/${name}`;
    return axiosClient.get(url);
  },
  getEntriesPokemon: (id: number): Promise<PokemonDesPcription> => {
    const url = `/pokemon-species/${id}`;
    return axiosClient.get(url);
  },
  getListDetail: async (): Promise<PokemonTypes[]> => {
    console.log("Fetch duoc goi");
    try {
      const res = await pokeApi.getPokemon(0, 100);
      const result = await Promise.all(
        res.results.map(async (item: PokemonList) => {
          const temp = await pokeApi.getDetailPokemonByName(item.name);
          const temp_split = temp.forms[0].url.split("/");
          temp.id = Number(temp_split[temp_split.length - 2]);
          return temp;
        })
      );
      return result;
    } catch (error) {
      throw error;
    }
  },
  filterSearch: (searchWord: string, data: PokemonTypes[]): PokemonTypes[] => {
    const newFilter = data.filter((value) => {
      return value.forms[0].name
        .toLowerCase()
        .includes(searchWord.toLowerCase());
    });
    return newFilter;
  },
};

export default pokeApi;
