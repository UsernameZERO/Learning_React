// {
//     type: 'ADD_MOVIES',
//     movies: [],
// },
// {
//     type: 'DECREASE_COUNT'
// }

//Action types
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITES = "ADD_FAVOURITES";
export const REMOVE_FAVOURITES = "REMOVE_FAVOURITES";
export const SHOW_FAVOURITES = "SHOW_FAVOURITES";

//Action creators
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies,
  };
}
export function addFavorites(movie) {
  return {
    type: ADD_FAVOURITES,
    movie,
  };
}
export function removeFavorites(movie) {
  return {
    type: REMOVE_FAVOURITES,
    movie,
  };
}
export function setShowFavorites(val) {
  return {
    type: SHOW_FAVOURITES,
    val,
  };
}
