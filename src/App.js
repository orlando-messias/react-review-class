import React, { Component } from 'react';
import './App.css';
import { getFavoritePokemonsIds, updateFavoritePokemons } from './services/PokedexService';
import { Link } from 'react-router-dom';

class App extends Component {

  isPokemonFavoriteOrNot() {
    // updateFavoritePokemons(20)
    const favoritePokemonsIds = getFavoritePokemonsIds();
    console.log(favoritePokemonsIds);
  }

  render() {
    // this.isPokemonFavoriteOrNot();
    return (
      <div className="App">
        <h1>Pokedéx</h1>
        <div>
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/about">About</Link>
          <Link className="link" to="/favorites">Favorite Pokémons</Link>
        </div>
      </div>
    );
  }
}

export default App;
