import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import './index.css';
import Pokedex from './Pokedex';
import SearchSpecificPokemon from './search-pokemon';

ReactDOM.render(
    <Router>
      <Routes>
        <Route path="/" element={<SearchSpecificPokemon />}>
        </Route>
      </Routes>
      <Routes>
        <Route path="/pokedex" element={<Pokedex/>}>
        </Route>
      </Routes>
  </Router>,
  document.getElementById('root')
);
