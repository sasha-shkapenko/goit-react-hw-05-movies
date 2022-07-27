import { useState, useEffect, Suspense } from 'react';
import { Link, Outlet, useParams } from "react-router-dom";
import { getMovieInfo } from "services/api";
import { useLocation } from "react-router-dom";
import placeholderImg from '../../images/user-icon-placeholder-1.png'
import s from './MovieDetails.module.css'

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const location = useLocation();
    useEffect(() => {
        getMovieInfo(movieId).then(setMovie);
    }, [movieId])
    if (!movie) {
        return null;
    }
    const backLinkHref = location.state?.from ?? '/';
    const { original_title, vote_average, overview, genres } = movie;
    return (
        <main>
            <Link to={backLinkHref} className={s.linkBack}>Go back</Link>
            <div className={s.wrap}>
                <img src={movie ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}` : placeholderImg} className={s.img} alt="" />
                {movie && (<div>
                    <h2>
                        {original_title}
                    </h2>
                    <p className={s.text}>
                        User score: {vote_average}
                    </p>
                    <h2> Overview</h2>
                    <p className={s.text}>
                        {overview}
                    </p>
                    <h2>Genres</h2>
                    <p className={s.text}>
                        {genres.map(genre => genre.name).join(', ')}
                    </p>
                </div>)}
            </div>
            <ul className={s.aditionalInfo}>
                <li className={s.item}>
                    <Link to="cast" state={{ from: backLinkHref }} className={s.link}>Cast</Link>
                </li>
                <li className={s.item}>
                    <Link to="reviews" state={{ from: backLinkHref }} className={s.link} >Reviews</Link>
                </li>
            </ul>
            <Suspense>
                <Outlet />
            </Suspense>
        </main>
    );
};
export default MovieDetails;
