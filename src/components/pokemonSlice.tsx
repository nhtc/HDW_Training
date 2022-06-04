import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PokemonInfo, PokemonProperties } from '../interface';
import {
  POKEMON_FAIL,
  POKEMON_LOADING,
  POKEMON_SUCCESS,
} from './common/PokemonActionType';

export const getPokemons = createAsyncThunk('pokemon/getPokemons', async () => {
  const res = await fetch(
    'https://pokeapi.co/api/v2/pokemon?limit=100&offset=20'
  );
  const { results } = await res.json();
  const result: PokemonProperties[] = await Promise.all(
    results.map(async (item: PokemonInfo) => {
      const temp = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${item.name}`
      );
      return await temp.json();
    })
  );
  console.log('fetch goi');
  return result;
});

export type IDefaultState = {
  listPokemon: PokemonProperties[];
  status: string;
  selected: number[];
};
const initialState: IDefaultState = {
  listPokemon: [],
  status: 'idle',
  selected: [],
};

const poke = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      console.log('id cua add pokemon ', action.payload.id);
      state.selected.push(action.payload.id);
    },
    removePokemon: (state, action) => {
      state.selected = state.selected.filter((id) => action.payload.id !== id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPokemons.pending, (state, action) => {
        state.status = POKEMON_LOADING;
      })
      .addCase(getPokemons.fulfilled, (state, action) => {
        state.status = POKEMON_SUCCESS;
        console.log(action.payload);
        console.log('type56 ', action.type);
        console.log('status: ', state.status);
        state.listPokemon = action.payload;
        console.log(state.listPokemon);
      })
      .addCase(getPokemons.rejected, (state, action) => {
        state.status = POKEMON_FAIL;
      });
  },
});
// const { reducer, actions } = poke;
// export const { addPokemon } = actions;
// export default reducer;

export const { addPokemon, removePokemon } = poke.actions;
export default poke.reducer;
