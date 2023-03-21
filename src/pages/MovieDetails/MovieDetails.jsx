import AboutMovie from 'components/AboutMovie/AboutMovie';
import { useEffect, useState, useRef } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { moviesDetailsFetch } from '../../services/api';
import { Wrapper, Link, List, Text } from './MovieDetails.styles';

const MovieDetails = () => {
  const [movies, setMovies] = useState(null);
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    moviesDetailsFetch(movieId).then(data => setMovies(data));
  }, [movieId]);

  console.log(location);

  // console.log(movies);

  return (
    <>
      <Link to={backLinkLocationRef.current}>Go back</Link>
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
    </>
  );
};

export default MovieDetails;
