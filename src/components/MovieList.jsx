import { Link } from "react-router-dom";


const MovieList = ({ movies }) => {
    return (<ul>
        {movies.map(({ id, name, title }) => {
            return (<Link to={`/movies/${id}`} key={id}>
                {title && title}
                {name && name}
            </Link>)
        })}
    </ul>)
}
export default MovieList;