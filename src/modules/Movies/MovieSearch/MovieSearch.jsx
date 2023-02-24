import { useState, useEffect, useCallback } from 'react';

import { useSearchParams } from 'react-router-dom';
import MovieSearchForm from './MovieSearchForm';
import MoviesList from '../MoviesList/MoviesList';
import { searchMovies } from 'services/movies-api';

const MovieSearch = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const [movieDetails, setMovieDetails] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');
  const page = searchParams.get('page');

  useEffect(() => {
    if (!search) {
      return;
    }
    const fetchMovie = async () => {
      try {
        setLoading(true);
        const data = await searchMovies(search, page);
        setItems(prevItems => [...prevItems, ...data]);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [page, search, setLoading, setItems]);
  const onSearchMovie = useCallback(
    ({ search }) => {
      setSearchParams({ search, page: 1 });
      setItems([]);
    },
    [setSearchParams]
  );

  const showMovie = useCallback(data => {
    setMovieDetails(data);
  }, []);

  const loadMore = useCallback(() => {
    //useCallback запам'ятовує попередне значення тому в масив додаємо сеарч
    setSearchParams({ search, page: Number(page) + 1 });
  }, [search]);

  return (
    <>
      <MovieSearchForm initialState={{ search }} onSubmit={onSearchMovie} />
      <MoviesList items={items} showPost={showMovie} />
    </>
  );
};

export default MovieSearch;
