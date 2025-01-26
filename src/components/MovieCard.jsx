import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-[#fae5d3] shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <img
        className="w-full h-72 object-cover"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="p-4">
        <h2 className="text-xl mb-2 font-semibold text-gray-900 truncate">
          {movie.title}
        </h2>
        {/* <p className="text-sm text-gray-300">
          Release Date: {movie.release_date || 'N/A'}
        </p> */}
        <p className="text-sm text-gray-500 flex items-center gap-2">
          <img src="/public/star.svg" />
          {movie.vote_average || 'N/A'}

          <span>.</span>
          <span className="text-sm text-gray-500">
            {movie.original_language.toUpperCase() || 'N/A'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
