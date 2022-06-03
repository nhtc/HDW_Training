import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PokemonProperties } from '../interface';

const poke = createSlice({
  name: 'pokemon',
  initialState: [] as PokemonProperties[],
  reducers: {
    addPokemon: (state, action: PayloadAction<PokemonProperties>) =>
      void state.push(action.payload),
    removePokemon: (state, action: PayloadAction<PokemonProperties>) => {
      return state.filter((value) => action.payload.id !== value.id);
    },
  },
});
// const { reducer, actions } = poke;
// export const { addPokemon } = actions;
// export default reducer;

export const { addPokemon, removePokemon } = poke.actions;
export default poke.reducer;
