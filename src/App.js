import React, { Component } from 'react';
import './App.css';
import pokemons from './data';
import { getFavoritePokemonsIds, updateFavoritePokemons } from './services/PokedexService';
import { Link, Switch, Route } from 'react-router-dom';
import About from './components/About';
import Favorites from './components/Favorites';
import NotFound from './components/NotFound';
import Pokedex from './components/Pokedex';

class App extends Component {

  // funcao que monta um objeto com a relacao de todos os IDs de pokemons e se cada um esta favoritado ou nao
  // exemplo: { 12: false, 15: true, 22: false, 10: false} 
  isPokemonFavoriteOrNot() {
    // pega no localstorage o array de IDs dos pokemons favoritados
    const favoritePokemonsIds = getFavoritePokemonsIds();
    // monta o objeto com a relacao de todos os IDs de pokemons e se cada um esta favoritado ou nao
    const objPokemonsFavoriteId = pokemons.reduce((acc, pokemon) => {
      acc[pokemon.id] = favoritePokemonsIds.includes(pokemon.id);
      return acc;
    }, {})
    return objPokemonsFavoriteId;
  }

  constructor(props) {
    super(props);
    // a relacao de todos os IDs de pokemos e se cada um esta favoritado é colocado aqui no state
    // pq toda vez q entrarmos na página queremos a relacao atualizada. Por isto vinculamos
    // com a chamada da função acima. Também toda vez que alguem favoritar ou desfavoritar queremos a relacao atuallizada
    this.state = { objFavoritesById: this.isPokemonFavoriteOrNot() }
  }

  // funcão que chama o componente Pokedex. Tambem passa pra Pokedex todos os pokemos do arquivo data e 
  // o objeto com a relação dos pokemos se estao favoritados ou nao
  renderPokedex() {
    const { objFavoritesById } = this.state;
    return (
      <Pokedex pokemons={pokemons} objFavoritesById={objFavoritesById} />
    )
  }

  // função que monta as rotas da aplicacao. É chamada lá embaixo no render
  renderRoutes() {
    return (
      <Switch>
        <Route exact path="/" render={() => this.renderPokedex()} />
        <Route exact path="/about" component={About} />
        <Route exact path="/favorites" component={Favorites} />
        <Route component={NotFound} />
      </Switch>
    )
  }

  render() {
    
    return (
      <div className="App">
        <h1>Pokedéx</h1>
        <div>
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/about">About</Link>
          <Link className="link" to="/favorites">Favorite Pokémons</Link>
        </div>
        <div>
          {/* chama a funcao renderRoutes pra montar a rota da aplicação e assim todos os componentes
           poderem rodar aqui dentro desta div */}
          {this.renderRoutes()}
        </div>
      </div>
    );
  }
}

export default App;
