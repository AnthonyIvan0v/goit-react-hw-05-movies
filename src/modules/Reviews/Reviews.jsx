import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/movies-api';

export const Reviews = () => {
  const { id } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!id) {
      return;
    }

    async function fetchReviews() {
      try {
        const { results } = await getMovieReviews(id);
        setReviews(results);
      } catch (error) {
        console.log('error', error);
      }
    }
    fetchReviews();
  }, [id]);

  if (reviews.length > 0) {
    return (
      <ul>
        {reviews &&
          reviews.map(({ author, content, id }) => {
            return (
              <li key={id}>
                <p>Author: {author}</p>
                <p>{content}</p>
              </li>
            );
          })}
      </ul>
    );
  }
  return <p> There is no reviews on this movie</p>;
};
export default Reviews;
