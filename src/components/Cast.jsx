import { getCast } from "services/api";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState(null);
    useEffect(() => {
        getCast(movieId).then(setCast);
    }, [movieId])
    console.log(cast);
    return (
        cast &&
        (<ul>
            {cast.map(({ id, original_name, character, profile_path }) => (
                <li key={id}>
                    <img
                        src={
                            profile_path
                                ? `https://image.tmdb.org/t/p/w300/${profile_path}`
                                : "notFound"
                        }
                        width={300}
                        height={450}
                        alt={original_name}
                    />
                    <p>{original_name}</p>
                    <p>Charater: {character}</p>
                </li>
            ))}
        </ul>));
}
