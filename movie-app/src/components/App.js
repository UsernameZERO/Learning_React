import React from "react";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies, setShowFavorites } from "../actions";

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      console.log("updated");
      this.forceUpdate();
    });
    //make api call
    //dispatch action
    store.dispatch(addMovies(data));
    console.log("state-1", store.getState());
  }

  isMovieFavourite = (movie) => {
    const { favorites } = this.props.store.getState().movies;
    const index = favorites.indexOf(movie);

    if (index !== -1) {
      return true;
    }
    return false;
  };
  onChangeTab = (val) => {
    this.props.store.dispatch(setShowFavorites(val));
  };
  render() {
    console.log("===", this.props.store.getState());
    const { list, showFavourites, favorites } =
      this.props.store.getState().movies;
    const displayMovies = showFavourites ? favorites : list;
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFavourites ? "" : "active-tabs"}`}
              onClick={() => this.onChangeTab(false)}
            >
              Movies
            </div>
            <div
              className={`tab ${showFavourites ? "active-tabs" : ""}`}
              onClick={() => this.onChangeTab(true)}
            >
              Favorites
            </div>
          </div>

          <div className="list">
            {displayMovies.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={`movie-${index}`}
                dispatch={this.props.store.dispatch}
                isFavourite={this.isMovieFavourite(movie)}
              />
            ))}
          </div>
          {displayMovies.length === 0 ? (
            <div className="no-movies">No Movies to display Here</div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
