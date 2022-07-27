import { lazy, Suspense } from "react";
import { Routes, Route, Navigate, NavLink } from "react-router-dom";
import s from './App.module.css'

const Home = lazy(() => import('../../pages/Home/Home'));
const Movies = lazy(() => import('../../pages/Movies'));
const MovieDetails = lazy(() => import('../../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));


export const App = () => {
  return (
    <div>
      <nav className={s.navigation}>
        <NavLink to='/' className={({ isActive }) => isActive ? [s.link, s.active].join(' ') : s.link}>
          Home
        </NavLink>
        <NavLink to='/movies' className={({ isActive }) => isActive ? [s.link, s.active].join(' ') : s.link}>
          Movies
        </NavLink>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path='cast' element={<Cast />} />
            <Route path='reviews' element={<Reviews />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>

        </Routes>
      </Suspense>
    </div>
  );
};
