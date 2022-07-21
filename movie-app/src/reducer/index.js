import {
  ADD_MOVIES,
  ADD_FAVOURITES,
  REMOVE_FAVOURITES,
  SHOW_FAVOURITES,
} from "../actions";

const initialMovieState = {
  list: [],
  favorites: [],
};

export default function movies(state = initialMovieState, action) {
  // if (action.type === ADD_MOVIES) {
  //   return {
  //     ...state,
  //     list: action.movies,
  //   };
  // }
  // return state;

  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };
    case ADD_FAVOURITES:
      return {
        ...state,
        favorites: [action.movie, ...state.favorites],
      };
    case REMOVE_FAVOURITES:
      const filteredArr = state.favorites.filter(
        (movie) => movie.Title !== action.movie.Title
      );
      return {
        ...state,
        favorites: filteredArr,
      };
    case SHOW_FAVOURITES:
      return {
        ...state,
        showFavourites: action.val,
      };
    default:
      return state;
  }
}
