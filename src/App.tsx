import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { RootState } from "./app/store";
import { getPokemons } from "./features/pokemons/pokemonsSlice";
import useDebounce from "./hooks/Debounce";
import About from "./layouts/About";
import Admin from "./layouts/Admin";
import Control from "./layouts/Control";
import DetailPokemon from "./layouts/DetailPokemon";
import Login from "./layouts/Login";
import ModalCom from "./layouts/Modal";
import Modal from "./layouts/Modal";
import Navigation from "./layouts/Navigation";
import Pagination from "./layouts/Pagination";
import Pokemon from "./layouts/Pokemon";
import Register from "./layouts/Register";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import PrivateRoute from "./utils/PrivateRoute";
//node -r esm server.js

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const pokemonList = useAppSelector((state: RootState) => state.pokemon);

  useEffect(() => {
    if (pokemonList.listPokemon.length === 0) {
      dispatch(getPokemons());
    }
  }, [dispatch]);

  return (
    <div className="App">
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="collection" element={<Pokemon />} />
        <Route path="collection/:name" element={<DetailPokemon />} />
        <Route path="carts" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="control" element={<Control />} />
        <Route path="register" element={<Register />} />
        <Route path="admin" element={<PrivateRoute outlet={<Admin />} />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
};

export default App;
