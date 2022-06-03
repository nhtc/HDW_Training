import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Notfound from './components/common/Notfound';
import PrivateRoute, {
  ProtectedRouteProps,
} from './components/common/PrivateRoute';
import About from './components/layout/About';
import Admin from './components/layout/Admin';
import DetailPokemon from './components/layout/DetailPokemon';
import Home from './components/layout/Home';
import Login from './components/layout/Login';
import Navigation from './components/layout/Navigation';
import Pokemon from './components/layout/Pokemon';

import './App.css';

const App: React.FC = () => {
  const [isLogIn, setIsLogIn] = useState<boolean>(false);

  const updateLog = (isLog: boolean): void => {
    console.log(isLog);
    setIsLogIn(isLog);
  };

  useEffect(() => {
    if (isLogIn) {
      localStorage.setItem('access-token', JSON.stringify(isLogIn));
    } else {
      localStorage.removeItem('access-token');
    }
  }, [isLogIn]);
  const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
    isAuthenticated: Boolean(isLogIn),
    authenticationPath: '/login',
  };

  return (
    <div className="App">
      <div>
        <Navigation isLog={isLogIn} updateLogIn={updateLog} />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="collection" element={<Pokemon />} />
        <Route path="collection/:name" element={<DetailPokemon />} />
        <Route path="carts" element={<About />} />
        <Route
          path="login"
          element={<Login isLog={isLogIn} updateLogIn={updateLog} />}
        />
        <Route
          path="admin"
          element={
            <PrivateRoute {...defaultProtectedRouteProps} outlet={<Admin />} />
          }
        />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
};

export default App;
