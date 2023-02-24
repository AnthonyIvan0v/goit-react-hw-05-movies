import { useState, useEffect, useCallback } from 'react';
import { useSearchParams, useParams } from 'react-router-dom';

import MoviesList from '../MoviesList/MoviesList';
import { getMovieById } from 'services/movies-api';

const MovieDetails = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [movieDetails, setMovieDetails] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams(); //коли викликається useSearchParams нам повертається як при useState масив

  const { id } = useParams();
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await getMovieById(id);
        setItems(data);
      } catch (error) {
        setError(error.message);
      } finally {
      }
    };
    fetchPost();
  }, [page, setItems, setError]);

  const showMovie = useCallback(data => {
    setMovieDetails(data);
  }, []);

  return (
    <>
      <MoviesList items={items} />
    </>
  );
};

export default MovieDetails;
