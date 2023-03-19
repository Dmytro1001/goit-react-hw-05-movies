import Home from '../pages/Home/Home';
import Movies from '../pages/Movies/Movies';
import { Route, Routes } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import MovieDetails from '../pages/MovieDetails/MovieDetails';
import Cast from '../components/Cast/Cast';
import Reviews from '../components/Reviews/Reviews';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <GlobalStyles />
    </>
  );
};
