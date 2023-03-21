import { PropTypes } from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { Item, Image, Info, Title, Vote } from './MoviesItem.styles';
import noPoster from '../../images/no_poster.png';

const MoviesItem = ({ id, title, poster, vote }) => {
  const rating = vote.toFixed(1);
  const location = useLocation();

  console.log(location);

  return (
    <Item>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <Image
          src={poster ? `https://image.tmdb.org/t/p/w500/${poster}` : noPoster}
          alt={title}
        />
        <Info>
          <Title>{title}</Title>
          <Vote>{rating}</Vote>
        </Info>
      </Link>
    </Item>
  );
};

export { MoviesItem };

MoviesItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string,
  vote: PropTypes.number.isRequired,
};
