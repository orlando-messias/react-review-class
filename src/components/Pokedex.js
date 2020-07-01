import React from 'react';

export default class Pokedex extends React.Component {

  constructor(props) {
    super(props);
    // o índice do pokemon começa com 0 pq queremos mostrar INICIALMENTE só o primeiro da lista. 
    // filteredType inicia com all pq nao queremos filtrar ainda por tipo de pokemon, só depois que
    // o usuário clicar num botão de tipo este valor será alterado
    this.state = { pokemonIndex: 0, filteredType: 'all' }
  }

  getFilteredPokemons() {
    const { pokemons } = this.props;
    const { filteredType } = this.state;
    // filtra os pokemons por tipo mas antes verifica se o state é all, se for all nao filtra e 
    // teremos todos, caso contrário filtra por um tipo especifico
    return pokemons.filter((pokemon) => {
      if (filteredType === 'all' ) return true;
      return pokemon.type === filteredType;
    });
  }

  render() {
    const { pokemons, objFavoritesById } = this.props;
    const { pokemonIndex } = this.state;
    // queremos os pokemons filtrados por tipo ou por all (todos) por isto chama a funcao acima
    const filteredPokemons = this.getFilteredPokemons();
    const pokemon = filteredPokemons[pokemonIndex];
  
    return (
      <div>
        <h2>Encountered Pokémons</h2>
        {/* abaixo temos a exibição do name do primeiro pokemon(indice 0). Além dele temos todos os
        outros disponveis por enquanto, pois o filtro até aqui ainda é all */}
        <h3>{pokemon.name}</h3>
      </div>
    )
  }
}