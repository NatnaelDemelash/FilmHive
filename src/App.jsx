import React, { useEffect, useState } from 'react';
import Search from './components/Search';
import MovieCard from './components/MovieCard';
import Spinner from './components/Spinner';

const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const AP_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [movieLists, setMovieLists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = async (query) => {
    setIsLoading(true);
    try {
      const endPoint = query
        ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const response = await fetch(endPoint, AP_OPTIONS);

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();

      if (data.response === 'False') {
        setErrorMessage(data.Error || 'Failed to fetch');
        setMovieLists([]);
        return;
      }

      setMovieLists(data.results);
    } catch (error) {
      console.error('Error fetching movies', error);
      setErrorMessage('Error fetching movies. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(searchTerm);
  }, [searchTerm]);

  return (
    <div className=" bg-[url('/public/pattern-2.png')]">
      <div className="container mx-auto">
        <header className="px-4 py-8 max-w-4xl mx-auto text-center">
          <img
            className="w-[80%] max-w-[600px] mx-auto mb-6"
            src="/hero.png"
            alt="hero image"
          />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Find <span className="text-orange-500 font-semibold">Movies</span>{' '}
            You'll Enjoy Without the Hassle
          </h1>

          {/* Search */}
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>

        {/* Movies Section */}
        <section className="max-w-6xl mx-auto px-4 py-8">
          {errorMessage && (
            <div className="py-4 text-red-500 text-center">{errorMessage}</div>
          )}
          {isLoading ? (
            <div className="text-center py-8 text-gray-600">
              <Spinner />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {movieLists.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default App;
