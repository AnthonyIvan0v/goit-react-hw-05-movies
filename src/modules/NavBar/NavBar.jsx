import items from './items';
import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';

const Navbar = () => {
  const elements = items.map(({ id, text, link }) => {
    return (
      <li key={id}>
        <NavLink to={link} className={styles.link}>
          {text}
        </NavLink>
      </li>
    );
  });
  return <ul className={styles.menu}>{elements}</ul>;
};

export default Navbar;
