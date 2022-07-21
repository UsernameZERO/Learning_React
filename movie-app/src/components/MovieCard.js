import React from "react";
import { addFavorites, removeFavorites } from "../actions";

class MovieCard extends React.Component {
  handleFavoritesClick = () => {
    const { movie } = this.props;
    this.props.dispatch(addFavorites(movie));
  };

  handleUnFavoritesClick = () => {
    const { movie } = this.props;
    this.props.dispatch(removeFavorites(movie));
  };

  render() {
    const { movie, isFavourite } = this.props;

    return (
      <div className="movie-card">
        <div className="left">
          <img alt="movie-poster" src={movie.Poster} />
        </div>
        <div className="right">
          <div className="title">{movie.Title}</div>
          <div className="plot">{movie.Plot}</div>
          <div className="footer">
            <div className="rating">{movie.imdbRating}</div>
            {isFavourite ? (
              <button
                className="unfavorite-btn"
                onClick={this.handleUnFavoritesClick}
              >
                UnFavorite
              </button>
            ) : (
              <button
                className="favorite-btn"
                onClick={this.handleFavoritesClick}
              >
                Favorite
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
