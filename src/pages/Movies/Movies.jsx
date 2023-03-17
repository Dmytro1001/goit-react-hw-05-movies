// import { useEffect, useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { moviesSearchFetch } from '../../services/api';
// import { MoviesList } from 'components/MoviesList/MoviesList';
// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { SearchBar } from 'components/SearchBar/SearchBar';

const Movies = () => {
  // const [textSearch, setTextSearch] = useState('');
  // const [searchParams, setSearchParams] = useSearchParams();
  // const [movies, setMovies] = useState('');
  // const [loading, setLoading] = useState(false);
  // const [, setError] = useState(null);

  // const handleSubmit = textSearch => {
  //   setTextSearch(textSearch);
  //   setMovies([]);
  // };

  // const mapper = data => {
  //   // console.log(data);
  //   return data.map(({ poster_path, id, original_title, vote_average }) => ({
  //     poster_path,
  //     id,
  //     original_title,
  //     vote_average,
  //   }));
  // };

  // useEffect(() => {
  //   if (textSearch === null) {
  //     return;
  //   }

  //   moviesSearchFetch(textSearch.trim()).then(data => setSearchMovies(data));

  //   return function cleanUp() {
  //     getMovies(textSearch.trim());
  //   };
  // }, [textSearch]);

  // const getMovies = async query => {

  //   await moviesSearchFetch(query).then(movies => {
  //     const mappedMovies = mapper(movies.results);
  //     setMovies(mappedMovies);
  //   });
  // };

  return (
    <>
      {/* <ToastContainer />
      <SearchBar onSubmit={handleSubmit} /> */}
      {/* <MoviesList movies={movies} /> */}
      <p>Movies</p>
    </>
  );
};

export default Movies;
