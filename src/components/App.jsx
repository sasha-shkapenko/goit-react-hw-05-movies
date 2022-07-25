import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import { Home } from "pages/Home";
import { Movies } from "pages/Movies";
import { MovieDetails } from "pages/MovieDetails";
import { Cast } from './Cast'
import { Reviews } from './Reviews';

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to='/'>
          Home
        </NavLink>
        <NavLink to='/movies'>
          Movies
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path='cast' element={<Cast />} />
          <Route path='reviews' element={<Reviews />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>

      </Routes>
    </div>
  );
};
