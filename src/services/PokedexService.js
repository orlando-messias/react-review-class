const getFavoritePokemonsIds = () => (
  JSON.parse(localStorage.getItem('favoritePokemonsIds')) || []
)

const saveFavoritePokemons = (pokemons) => (
  localStorage.setItem('favoritePokemonsIds', JSON.stringify(pokemons))
)

const addFavoritePokemons = (pokemonId) => {
  const favoritePokemonIds = getFavoritePokemonsIds();
  const newFavoritePokemons = [...favoritePokemonIds, pokemonId];
  saveFavoritePokemons(newFavoritePokemons);
}

const removePokemonFromFavorites = (pokemonId) => {
  const favoritePokemonIds = getFavoritePokemonsIds();
  const newFavoritePokemons = favoritePokemonIds.filter((id) => id !== pokemonId);
  saveFavoritePokemons(newFavoritePokemons);
}

const updateFavoritePokemons = (pokemonId, isFavorite) => (
  isFavorite ? addFavoritePokemons(pokemonId) : removePokemonFromFavorites(pokemonId)
)

export { getFavoritePokemonsIds, updateFavoritePokemons }