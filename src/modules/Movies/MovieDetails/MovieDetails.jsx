import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

import MoviesList from '../MoviesList/MoviesList';
import { getMovieById } from 'services/movies-api';

const MovieDetails = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [movieDetails, setMovieDetails] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams(); //коли викликається useSearchParams нам повертається як при useState масив

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const data = await getMovieById(id);
        setItems(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [page, setLoading, setItems, setError]);

  const showMovie = useCallback(data => {
    setMovieDetails(data);
  }, []);

  return (
    <>
      <MoviesList items={items} showPost={showMovie} />
    </>
  );
};

export default MovieDetails;
