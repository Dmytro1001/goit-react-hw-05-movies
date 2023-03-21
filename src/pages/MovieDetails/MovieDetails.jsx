import { useEffect, useState, useRef, Suspense } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { moviesDetailsFetch } from '../../services/api';
import { Wrapper, Link, List, Text, BackBtn } from './MovieDetails.styles';
import AboutMovie from 'components/AboutMovie/AboutMovie';
import { Loader } from 'components/Loader/Loader';

const MovieDetails = () => {
  const [movies, setMovies] = useState(null);
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? '/');

  useEffect(() => {
    moviesDetailsFetch(movieId).then(data => setMovies(data));
  }, [movieId]);

  return (
    <>
      <BackBtn to={backLinkLocation.current}>Go back</BackBtn>

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

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
