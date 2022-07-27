import { getReviews } from "services/api";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState(null);
    useEffect(() => {
        getReviews(movieId).then(setReviews);
    }, [movieId])
    if (!reviews) {
        return null;
    }
    return (
        <>
            {reviews.length !== 0 ?
                (<ul>
                    {reviews.map(({ id, author, content }) => (
                        <li key={id}>
                            <h2>{author}</h2>
                            <p>{content}</p>
                        </li>
                    ))}
                </ul>)
                : 'Sorry, we do not have any reviews for this movie'
            }
        </>
    )
}
export default Reviews;