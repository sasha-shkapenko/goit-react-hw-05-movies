import PropTypes from 'prop-types';

import { Link, useLocation } from "react-router-dom";
import s from './MovieList.module.css'


const MovieList = ({ movies }) => {
    const location = useLocation();

    return (<ul className={s.list}>
        {movies.map(({ id, name, title }) => {
            return (<Link to={`/movies/${id}`} key={id} state={{ from: location }} className={s.item}>
                {title && title}
                {name && name}
            </Link>)
        })}
    </ul>)
}
export default MovieList;

MovieList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string,
            title: PropTypes.string,
        })
    ),
}