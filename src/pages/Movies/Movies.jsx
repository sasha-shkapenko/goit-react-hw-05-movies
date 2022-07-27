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
    const filter = searchParams.get('filter' ?? '');

    const onFormInput = value => {
        setSearchParams(value !== '' ? { filter: value } : {})
    }
    const onFormSubmit = (e) => {
        e.preventDefault();
        const newQuery = e.target.query.value;
        if (!newQuery || newQuery.trim() === '') {
            toast.warning('Enter your query');
            return;
        }
        getSearchedMovies(newQuery).then(res => {
            if (res.length === 0) {
                toast.error('Nothing found');
            }
            setMovies([...res]);
        });

    }
    useEffect(() => {
        if (searchParams.get('filter') !== null) {
            const newQuery = searchParams.get('filter');
            getSearchedMovies(newQuery).then(res => {
                if (res.length === 0) {
                    toast.error('Nothing found');
                }
                setMovies([...res]);
            }).catch(error => console.log(error));
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