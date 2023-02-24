import { memo } from 'react';

import useForm from 'shared/hooks/useForm/useForm';

import styles from './movie-search-form.module.css';

const MovieSearchForm = ({ initialState, onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { search } = state;
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.wrapper}>
        <label className={styles.label}>Search movie</label>
        <input
          name="search"
          value={search}
          placeholder="Enter movie title"
          onChange={handleChange}
          required
          className={styles.input}
        />
      </div>
    </form>
  );
};

export default memo(MovieSearchForm);

MovieSearchForm.defaultProps = {
  initialState: {
    search: '',
  },
};
