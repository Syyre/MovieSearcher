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
        <div className="no-image">No Image</div>
      )}
      <div className="content">
        <div className="rating">
          <img src="src/assets/Star.svg" alt="Star Icon" />
          <p>{movie.vote_average}</p>
        </div>
        <span>•</span>
        <p className="lang">{movie.original_language}</p>
        <span>•</span>

        <p className="year">{movie.release_date.split("-")[0]}</p>
      </div>
    </div>
  );
};

export default MovieCard;
