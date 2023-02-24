import { useState, useEffect } from 'react';

import MoviesList from './MoviesList/MoviesList';
import { getTrending } from 'services/movies-api';

const Movies = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getTrending();
        setItems(data);
      } catch (error) {
      } finally {
      }
    };
    fetchMovies();
  }, [setItems]);

  return <MoviesList items={items} />;
};

export default Movies;
