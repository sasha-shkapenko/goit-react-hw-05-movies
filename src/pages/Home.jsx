import { useState, useEffect } from 'react';
import { getTrending } from '../services/api';

import MovieList from 'components/MovieList';

export const Home = () => {
    const [movies, setMovies] = useState(null);
    useEffect(() => {
        getTrending()
            .then(results => setMovies([...results]))
            .catch(error => console.log(error));
    }, []);

    return (
        <main>
            Trending movies
            {movies && <MovieList movies={movies} />}
        </main>
    );
};
