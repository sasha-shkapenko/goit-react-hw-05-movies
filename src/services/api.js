import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'f8a2c74c619ae47b0575baa7c8b50025';

export const getTrending = async () => {
    const res = await axios.get(`/trending/all/week?api_key=${API_KEY}`);
    return res.data.results;
};
export const getMovieInfo = async (id) => {
    const res = await axios.get(`movie/${id}?api_key=${API_KEY}&language=en-US`);
    return res.data;
}

export const getCast = async (id) => {
    const res = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
    return res.data.cast;
}

export const getReviews = async (id) => {
    const res = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
    return res.data.results;
}

export const getSearchedMovies = async (query) => {
    const res = await axios.get(`/search/movie?api_key=${API_KEY}&query=${query}`);
    return res.data.results;
}