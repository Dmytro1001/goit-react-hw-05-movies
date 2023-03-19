import { Outlet } from 'react-router-dom';
import AboutMovie from 'components/AboutMovie/AboutMovie';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { moviesDetailsFetch } from '../../services/api';
import { Wrapper, Link, List, Text } from './MovieDetails.styles';

const MovieDetails = () => {
  const [movies, setMovies] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    moviesDetailsFetch(movieId).then(data => setMovies(data));
  }, [movieId]);

  console.log(movies);

  return (
    <main>
      {movies && <AboutMovie movies={movies} />}
      <Wrapper>
        <Text>Additional information:</Text>
        <List>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </List>
      </Wrapper>
      <Outlet />
    </main>
  );
};

export default MovieDetails;
