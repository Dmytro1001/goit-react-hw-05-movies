import { PropTypes } from 'prop-types';
import { List } from './MoviesList.styles';

import { MoviesItem } from 'components/MoviesItem/MoviesItem';

const MoviesList = ({ movies }) => {
  return (
    <>
      <List>
        {movies.map(({ id, original_title, poster_path, vote_average }) => {
          return (
            <MoviesItem
              key={id}
              id={id}
              title={original_title}
              poster={poster_path}
              vote={vote_average}
            />
          );
        })}
      </List>
    </>
  );
};

export { MoviesList };

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};
