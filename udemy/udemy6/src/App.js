import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://react-http-4c666-default-rtdb.firebaseio.com/movies.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const loadeMovies = [];
      for (const key in data) {
        loadeMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      setMovies(loadeMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  async function addMovieHandler(movie) {
    // console.log(movie);
    const responce = await fetch(
      "https://react-http-4c666-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await responce.json();
    console.log(data);
  }

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }
  // function searchApi() {
  //   setIsLoding(true);
  //   setError(null);
  //   try {
  //     const url = "https://swapi.dev/api/films/";
  //     axios.get(url).then(function (response) {
  //       const transformedMovies = response.data.results.map((el) => {
  //         return {
  //           id: el.episode_id,
  //           title: el.title,
  //           openingText: el.opening_crawl,
  //           releaseDate: el.release_date,
  //         };
  //       });
  //       // if (!response.ok) {
  //       //   throw new Error("에러입니다.");
  //       // }
  //       setMovies(transformedMovies);
  //       setIsLoding(false);
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
