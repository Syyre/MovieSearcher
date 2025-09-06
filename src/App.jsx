import { useEffect, useState } from "react";
import bg from "./assets/BG.png";
import Search from "./components/search";
import Spinner from "./components/spinner";
import MovieCard from "./components/MovieCard";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = async () => {
    setIsLoading(true);
    setErrorMsg("");
    try {
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      if (data.response === "False") {
        setErrorMsg(data.error);
      }

      setMovies(data.results);
    } catch (error) {
      setErrorMsg("Failed to fetch movies, please try again later.");
      console.error("Error fetching movies:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <main style={{ backgroundImage: `url(${bg})` }}>
        <div className="pattern" />
        <div className="wrapper">
          <header>
            <img src="src/assets/hero-img.png" alt="Hero" />
            <h1>
              Find <span className="text-gradient">Movies</span> You'll Enjoy
              Without Hassle
            </h1>
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </header>

          <section className="all-movies">
            <h2 className="mg-[20px]">All Movies</h2>
            {isLoading ? (
              <Spinner />
            ) : errorMsg ? (
              <p className="error">{errorMsg}</p>
            ) : movies.length > 0 ? (
              <ul>
                {movies.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </ul>
            ) : (
              <p>No movies found.</p>
            )}
          </section>
        </div>
      </main>
    </div>
  );
};
export default App;
