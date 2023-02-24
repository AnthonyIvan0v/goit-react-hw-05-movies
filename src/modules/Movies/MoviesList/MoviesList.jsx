import { Link, useLocation } from 'react-router-dom';

import styles from './movies-list.module.css';

const MoviesList = ({ items, showMovie }) => {
  const location = useLocation();

  const elements = items.map(({ id, title }) => {
    return (
      <Link
        className={styles.link}
        key={id}
        to={`/movies/${id}`}
        state={{ from: location }}
      >
        <li className={styles.item}>
          <h4>{title}</h4>
        </li>
      </Link>
    );
  });
  return <ul className={styles.list}>{elements}</ul>;
};
export default MoviesList;
MoviesList.defaultProps = {
  items: [],
};
