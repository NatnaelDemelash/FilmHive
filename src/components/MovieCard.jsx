import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <img
        className="w-full h-72 object-cover"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 truncate">
          {movie.title}
        </h2>
        <p className="text-sm text-gray-500">
          Release Date: {movie.release_date || 'N/A'}
        </p>
        <p className="text-sm text-gray-500">
          Rating: {movie.vote_average || 'N/A'}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
