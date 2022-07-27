import { useState, useEffect } from 'react';
import { getTrending } from '../../services/api';

import MovieList from 'components/MovieList/MovieList';
import s from './Home.module.css';

const Home = () => {
    const [movies, setMovies] = useState(null);
    useEffect(() => {
        getTrending()
            .then(results => setMovies([...results]))
            .catch(error => console.log(error));
    }, []);

    return (
        <main>
            <h1 className={s.title}>Trending movies</h1>
            {movies && <MovieList movies={movies} />}
        </main>
    );
};
export default Home;