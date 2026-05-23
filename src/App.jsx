import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

import SearchBar from "./Component/SearchBar";
import MovieList from "./Component/MovieList";

function App() {
  const [Movies, setMovies] = useState([]);
  const [Search, setSearch] = useState("Hulk");
  const [Loading, setLoading] = useState(false);

  const url = `http://www.omdbapi.com/?s=${Search}&apikey=134d002d`;

  useEffect(() => {
    const FetchMovies = async () => {
      const movieApi = await fetch(url);
      const getMovie = await movieApi.json();
      setMovies(getMovie.Search);
      console.log(getMovie.Search);
    };
    FetchMovies();
  }, [Search]);

  return (
    <>
      <SearchBar Search={Search} setSearch={setSearch}></SearchBar>
      <MovieList Movies={Movies}></MovieList>
    </>
  );
}

export default App;
