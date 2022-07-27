import { getCast } from "services/api";
import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import placeholderImg from '../../images/user-icon-placeholder-1.png'
import s from './Cast.module.css';

const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState(null);
    useEffect(() => {
        getCast(movieId).then(setCast);
    }, [movieId])
    const location = useLocation();
    return (
        cast &&
        (<ul className={s.list}>
            {cast.map(({ id, original_name, character, profile_path }) => (
                <li key={id} className={s.item}>
                    <img
                        src={
                            profile_path
                                ? `https://image.tmdb.org/t/p/w300/${profile_path}`
                                : placeholderImg
                        }
                        className={s.img}
                        width={300}
                        height={450}
                        alt={original_name}
                    />
                    <p className={s.name}>{original_name}</p>
                    <p className={s.character}>Charater: {character}</p>
                </li>
            ))}
        </ul>));
}
export default Cast;
