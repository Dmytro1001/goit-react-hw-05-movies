import { useEffect, useState } from 'react';
import { moviesTrendingFetch } from '../../services/api';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    moviesTrendingFetch().then(data => setMovies(data));
  }, []);

  return <>{movies && <MoviesList movies={movies} />}</>;
};

export default Home;
