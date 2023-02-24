import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/movies-api';

import styles from './cast.module.css';

export const Cast = () => {
  const { id } = useParams();

  const [casts, setCasts] = useState(null);

  useEffect(() => {
    if (!id) {
      return;
    }

    const fetchCredits = async () => {
      try {
        const results = await getMovieCredits(id);
        setCasts(results.cast);
      } catch (error) {
        console.log('error', error);
      }
    };
    fetchCredits();
  }, [id]);

  return (
    <div>
      <ul className={styles.list}>
        {casts &&
          casts.map(({ profile_path, name, id, original_name, character }) => {
            const IMG_PATH = 'https://image.tmdb.org/t/p/w500/';
            const profilePath = IMG_PATH + profile_path;

            return (
              <li className={styles.item} key={id}>
                <img
                  src={profilePath}
                  alt={name}
                  className={styles.profileImg}
                />
                <p> {name || original_name}</p>
                <p>Character: {character}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Cast;
