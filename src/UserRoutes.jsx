import { Routes, Route } from 'react-router-dom';

import { lazy, Suspense } from 'react';
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MovieSearchPage = lazy(() =>
  import('pages/MovieSearchPage/MovieSearchPage')
);
const MovieDetailsPage = lazy(() =>
  import('pages/MovieDetailsPage/MovieDetailsPage')
);
const CastPage = lazy(() => import('pages/CastPage/CastPage'));
const ReviewsPage = lazy(() => import('pages/ReviewsPage/ReviewsPage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>...loading</p>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search/movie" element={<MovieSearchPage />} />
        <Route path="/movies/:id" element={<MovieDetailsPage />}>
          <Route path="cast" element={<CastPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
