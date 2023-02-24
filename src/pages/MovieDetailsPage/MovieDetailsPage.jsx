import { useState, useEffect } from 'react';
import {
  Link,
  Outlet,
  useParams,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { getMovieById } from 'services/movies-api';

import styles from './movie-details-page.module.css';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState();
  const { id } = useParams(); //повертається об'єкт в якому ключем є те що було написона через двокрампку в адресі стало ключем а реальне значення чке написано стало значинням ключа

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const result = await getMovieById(id);
        setMovie(result);
        console.log(result);
      } catch ({ responce }) {
        console.log(responce.data.message);
      }
    };
    fetchMovie();
  }, []);

  return (
    <>
      <button className={styles.button} onClick={() => navigate(from)}>
        Go back
      </button>

      <div className={styles.wrapperMainInfo}>
        <img
          src={
            `https://image.tmdb.org/t/p/w500${movie?.poster_path}` ||
            movie?.backdrop_path
          }
          alt={movie?.title}
        />
        <div className={styles.wrapperTextContent}>
          <h2>{movie?.title || movie?.original_title || movie?.name}</h2>
          <p>Release data : {movie?.release_date}</p>
          <p>Vote average : {movie?.vote_average}</p>
          <p>Overview : </p>
          <p>{movie?.overview}</p>
          <p>
            Genres :
            {movie?.genres &&
              movie?.genres.map(({ id, name }) => (
                <span key={id}> {name}, </span>
              ))}
          </p>
        </div>
      </div>

      <ul>
        <Link to="cast" state={{ from }}>
          <p>Cast</p>
        </Link>
        <Link to="reviews" state={{ from }}>
          <p>Reviews</p>
        </Link>
        <Outlet context={id} />
      </ul>
    </>
  );
};

export default MovieDetailsPage;
