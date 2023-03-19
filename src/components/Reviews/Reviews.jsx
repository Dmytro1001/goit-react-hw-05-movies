import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { movieReviewsFetch } from '../../services/api';
import { List, Wrapper, Date, Text } from './Reviews.styles';

const Reviews = () => {
  const [reviews, setReviews] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    movieReviewsFetch(movieId).then(data => setReviews(data.results));
  }, [movieId]);

  if (reviews !== '') {
    return (
      <>
        <List>
          {reviews.map(review => (
            <li key={review.id}>
              <Wrapper>
                <h3>
                  Author: <span>{review.author}</span>
                </h3>
                <Text>"{review.content}"</Text>
                <Date>"{review.updated_at.slice(0, 10)}"</Date>
              </Wrapper>
            </li>
          ))}
        </List>
      </>
    );
  }
};

export default Reviews;
