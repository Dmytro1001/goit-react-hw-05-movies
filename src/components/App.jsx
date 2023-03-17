import Home from '../pages/Home/Home';
import Movies from '../pages/Movies/Movies';
import { NavLink, Route, Routes } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import MovieDetails from '../pages/MovieDetails/MovieDetails';

export const App = () => {
  return (
    <div>
      <div>
        <NavLink to="/">Logo</NavLink>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        {/* <Route path="/movies/:movieId/cast" element={<Cast />} />
        <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <GlobalStyles />
    </div>
  );
};
