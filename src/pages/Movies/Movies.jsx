import { useSearchParams } from "react-router-dom";
import { getSearchedMovies } from '../../services/api'
import { useState, useEffect } from "react";
import { SearchBar } from "components/SearchBar/SearchBar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import MovieList from '../../components/MovieList/MovieList';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [filter, setFilter] = useState('');

    const onFormInput = value => {
        setFilter(value);
    }
    const onFormSubmit = (e) => {
        e.preventDefault();
        if (!filter || filter.trim() === '') {
            toast.warning('Enter your query');
            return;
        }
        getSearchedMovies(filter).then(res => {
            if (res.length === 0) {
                toast.error('Nothing found');
            }
            setMovies([...res]);
            const nextParams = filter !== '' ? { filter } : {};
            setSearchParams(nextParams);
        });

    }
    useEffect(() => {
        if (searchParams.get('filter') !== null) {
            const newQuery = searchParams.get('filter');
            getSearchedMovies(newQuery).then(setMovies).catch(error => console.log(error));
        }
    }, [searchParams])

    return (
        <main>
            <ToastContainer autoClose={2000} />
            <SearchBar onChange={onFormInput} onSubmit={onFormSubmit} filter={filter} />
            {movies && <MovieList movies={movies} />}
        </main>
    );
};
export default Movies;