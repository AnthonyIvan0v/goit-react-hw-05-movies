import { Routes, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage/HomePage';
import MovieSearchPage from 'pages/MovieSearchPage/MovieSearchPage';
import MovieDetailsPage from 'pages/MovieDetailsPage/MovieDetailsPage';
import CastPage from 'pages/CastPage/CastPage';
import ReviewsPage from 'pages/ReviewsPage/ReviewsPage';

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search/movie" element={<MovieSearchPage />} />
      <Route path="/movies/:id" element={<MovieDetailsPage />}>
        <Route path="cast" element={<CastPage />} />
        <Route path="reviews" element={<ReviewsPage />} />
      </Route>
    </Routes>
  );
};

export default UserRoutes;
