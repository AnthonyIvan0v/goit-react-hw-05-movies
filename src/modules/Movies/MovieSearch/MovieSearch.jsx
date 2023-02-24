import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import { useSearchParams } from 'react-router-dom';
import MovieSearchForm from './MovieSearchForm';
import MoviesList from '../MoviesList/MoviesList';
import { searchMovies } from 'services/movies-api';

const MovieSearch = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movieDetails, setMovieDetails] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');
  const page = searchParams.get('page');

  useEffect(() => {
    if (!search) {
      return;
    }
    const fetchPost = async () => {
      try {
        setLoading(true);
        const data = await searchMovies(search, page);
        setItems(prevItems => [...prevItems, ...data]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [page, search, setLoading, setItems, setError]);
  const onSearchMovie = useCallback(({ search }) => {
    setSearchParams({ search, page: 1 });
    setItems([]);
  }, []);

  const showMovie = useCallback(data => {
    setMovieDetails(data);
  }, []);

  const loadMore = useCallback(() => {
    //useCallback запам'ятовує попередне значення тому в масив додаємо сеарч
    setSearchParams({ search, page: Number(page) + 1 });
  }, [search]);

  const closeModal = useCallback(() => {
    setMovieDetails(null);
  }, []);

  return (
    <>
      <MovieSearchForm initialState={{ search }} onSubmit={onSearchMovie} />
      <MoviesList items={items} showPost={showMovie} />
      {loading && <p>...Load posts</p>}
      {Boolean(items.length) && <button onClick={loadMore}>Load more</button>}
    </>
  );
};

export default MovieSearch;
