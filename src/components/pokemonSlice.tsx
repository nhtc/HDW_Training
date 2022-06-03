import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { PokemonInfo, PokemonProperties } from '../interface';
import {
  POKEMON_FAIL,
  POKEMON_LOADING,
  POKEMON_SUCCESS,
} from './common/PokemonActionType';

export const getPokemons = createAsyncThunk('pokemon/getPokemons', async () => {
  const res = await fetch(
    'https://pokeapi.co/api/v2/pokemon?limit=2&offset=20'
  );
  const listApi = await res.json();
  const result: PokemonProperties[] = listApi.results.map(
    async (item: PokemonInfo) => {
      const temp = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${item.name}`
      );
      return await temp.json();
    }
  );
  return [];
});

export type IDefaultState = {
  listPokemon: PokemonProperties[];
  status: string;
};
const initialState: IDefaultState = {
  listPokemon: [],
  status: 'idle',
};

const poke = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    addPokemon: (state, action: PayloadAction<PokemonProperties>) =>
      // void state.listPokemon.push(action.payload)
      console.log(action.payload),
    removePokemon: (state, action: PayloadAction<PokemonProperties>) =>
      // void state.listPokemon.filter((value) => action.payload.id !== value.id)
      console.log(action.payload),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPokemons.pending, (state, action) => {
        state.status = POKEMON_LOADING;
      })
      .addCase(getPokemons.fulfilled, (state, action) => {
        state.status = POKEMON_SUCCESS;
        state.listPokemon = action.payload;
      })
      .addCase(getPokemons.rejected, (state, action) => {
        state.status = POKEMON_FAIL;
      });
  },
});
// const { reducer, actions } = poke;
// export const { addPokemon } = actions;
// export default reducer;

export const { addPokemon } = poke.actions;
export default poke.reducer;
