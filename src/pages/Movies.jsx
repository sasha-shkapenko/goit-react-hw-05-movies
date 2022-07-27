import { useSearchParams } from "react-router-dom";
import { getSearchedMovies } from '../services/api'
import { useState } from "react";
import { SearchBar } from "components/SearchBar/SearchBar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import MovieList from '../components/MovieList/MovieList';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const filter = searchParams.get('filter' ?? '');

    const onFormInput = value => {
        setSearchParams(value !== '' ? { filter: value } : {})
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
        });
    }

    return (
        <main>
            <ToastContainer autoClose={2000} />
            <SearchBar onChange={onFormInput} onSubmit={onFormSubmit} filter={filter} />
            {movies && <MovieList movies={movies} />}
        </main>
    );
};
export default Movies;