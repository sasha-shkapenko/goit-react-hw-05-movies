import { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from "react-router-dom";
import { getMovieInfo } from "services/api";

export const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    useEffect(() => {
        getMovieInfo(movieId).then(setMovie);
    }, [movieId])
    if (!movie) {
        return null;
    }
    const { original_title, vote_average, overview, genres } = movie;
    return (
        <main>
            <Link to="/">Back</Link>
            <img src={movie ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}` : ''} alt="" />
            {movie && (<div>
                <h2>
                    {original_title}
                </h2>
                <p>
                    User score: {vote_average}
                </p>
                <h2> Overview</h2>
                <p>
                    {overview}
                </p>
                <h2>Genres</h2>
                <p>
                    {genres.map(genre => genre.name).join(', ')}
                </p>
                <ul>
                    <li>
                        <Link to="cast">Cast</Link>
                    </li>
                    <li>
                        <Link to="reviews">Reviews</Link>
                    </li>
                </ul>
                <Outlet />
            </div>)}
        </main>
    );
};
