import { useEffect, useState } from 'react';
import { moviesTrendingFetch } from '../../services/api';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  // const mapper = data => {
  //   // console.log(data);
  //   return data.map(({ poster_path, id, original_title, vote_average }) => ({
  //     poster_path,
  //     id,
  //     original_title,
  //     vote_average,
  //   }));
  // };

  useEffect(() => {
    moviesTrendingFetch().then(data => setMovies(data));
  }, []);

  console.log(movies);

  return <main>{movies && <MoviesList movies={movies} />}</main>;
};

export default Home;
