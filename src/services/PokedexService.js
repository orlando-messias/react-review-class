
// pesquisa no localstorage e retorna os IDs dos pokemos favoritados. Inicialmente retorna array vazio
const getFavoritePokemonsIds = () => (
  JSON.parse(localStorage.getItem('favoritePokemonsIds')) || []
)

// guarda no localstorage os IDs dos pokemons favoritados pelo usuário
const saveFavoritePokemons = (pokemons) => (
  localStorage.setItem('favoritePokemonsIds', JSON.stringify(pokemons))
)

// adiciona um novo ID à lista de IDs de pokemons favoritados
const addFavoritePokemons = (pokemonId) => {
  const favoritePokemonIds = getFavoritePokemonsIds();
  const newFavoritePokemons = [...favoritePokemonIds, pokemonId];
  saveFavoritePokemons(newFavoritePokemons);
}

// remove um ID da lista de IDs de pokemons favoritados
const removePokemonFromFavorites = (pokemonId) => {
  const favoritePokemonIds = getFavoritePokemonsIds();
  const newFavoritePokemons = favoritePokemonIds.filter((id) => id !== pokemonId);
  saveFavoritePokemons(newFavoritePokemons);
}

// recebe um pokemonId e um true or false pra adicionar ou remover ID da lista de pokemons favoritados
const updateFavoritePokemons = (pokemonId, isFavorite) => (
  isFavorite ? addFavoritePokemons(pokemonId) : removePokemonFromFavorites(pokemonId)
)

export { getFavoritePokemonsIds, updateFavoritePokemons }