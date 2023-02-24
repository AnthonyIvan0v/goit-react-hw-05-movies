import { useState, useEffect } from 'react';

import MoviesList from './MoviesList/MoviesList';
import { getTrending } from 'services/movies-api';

const Movies = () => {
  const [items, setItems] = useState([]);

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getTrending();
        setItems(data);
      } catch (error) {
        setError(error.message);
      } finally {
      }
    };
    fetchMovies();
  }, [setItems, setError]);

  return <MoviesList items={items} />;
};

export default Movies;
