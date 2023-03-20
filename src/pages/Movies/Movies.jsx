import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { moviesSearchFetch } from '../../services/api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchBar from 'components/SearchBar/SearchBar';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = e => {
    setQuery(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      return toast.warn('The search string cannot be empty!', {
        position: toast.POSITION.TOP_CENTER,
      });
    }

    setSearchParams(query !== '' ? { query } : {});
    setQuery('');
  };

  useEffect(() => {
    const query = searchParams.get('query') ?? '';

    if (!query) {
      return;
    }

    (async () => {
      try {
        const data = await moviesSearchFetch(query);

        if (data.length === 0) {
          return toast.error(`No results found for ${query}`, {
            position: 'top-center',
            theme: 'colored',
          });
        }

        setMovies(data);
      } catch (error) {
        toast.error(error.message);
      }
    })();
  }, [searchParams, movies.length]);

  // console.log(movies);

  return (
    <>
      <ToastContainer />
      <SearchBar
        value={query}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <MoviesList movies={movies} />
    </>
  );
};

export default Movies;
