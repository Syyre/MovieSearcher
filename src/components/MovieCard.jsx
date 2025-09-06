import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      ) : (
        <img src="src/assets/No-Poster.png" alt="No Image Available" />
      )}
      <div className="mt-4">
        <h3>{movie.title}</h3>
        <div className="content">
          <div className="rating">
            <img src="src/assets/Star.svg" alt="Star Icon" />
            <p>{movie.vote_average}</p>
          </div>
          <span>•</span>
          <p className="lang">{movie.original_language}</p>
          <span>•</span>

          {movie.release_date ? (
            <p className="year">{movie.release_date.split("-")[0]}</p>
          ) : (
            <p className="year">Unknown</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
