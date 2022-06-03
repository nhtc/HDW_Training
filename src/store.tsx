import { configureStore } from '@reduxjs/toolkit';

import pokemonReducer from './components/pokemonSlice';

const rootReducer = {
  pokemon: pokemonReducer,
};
const store = configureStore({
  reducer: rootReducer,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; // Type to access dispatch
export default store;
