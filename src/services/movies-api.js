import axios from 'axios';

const API_KEY = 'b936dbeb2c24233fe8478f46d56a734f';
const BaseURL = 'https://api.themoviedb.org/3/';

const instance = axios.create({
  baseURL: BaseURL,
  params: {
    key: API_KEY,
  },
});

export const searchFilms = async (q, _page = 1) => {
  const { data } = await instance.get('/', {
    params: {
      q,
      _page,
    },
  });
  return data;
};

export const getTrending = async () => {
  const { data } = await instance.get(`/trending/all/week?api_key=${API_KEY}`);
  return data.results;
};

export const getMovieById = async id => {
  const { data } = await instance.get(`/movie/${id}?api_key=${API_KEY}`);

  return data;
};

export const getMovieCredits = async id => {
  const { data } = await instance.get(
    `/movie/${id}/credits?api_key=${API_KEY}`
  );

  return data;
};

export const searchMovies = async query => {
  const { data } = await instance.get(
    `/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&include_adult=false`
  );
  return data.results;
};

export const getMovieReviews = async id => {
  const { data } = await instance.get(
    `/movie/${id}/reviews?api_key=${API_KEY}`
  );

  return data;
};
