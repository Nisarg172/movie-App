import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./MovieCard";

function App() {
  const API_URL = "http://www.omdbapi.com?apikey=e14ff692";
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  

  const searchMovie = async (title) => 
  {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
    setMovies(data.Search);   
    
  };

    useEffect(() => {
      searchMovie("Batman");
     
  }, []);

  return (
    <div className="app">
      <h1>movie App</h1>

      <div className="search">
        <input
          type="text"
          name="search"
          value={search}
          placeholder="search movie "
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        <img
          src="https://gist.githubusercontent.com/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg"
          onClick={() => {
            searchMovie(search);
          }}
        />
      </div>
     
      { movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => {
            return (
            <MovieCard movie={movie}  key={movie.imdbID}/>
            );
          })}
        </div>
      ) : (
        <div className="empty">
          <h2>movie is not found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
