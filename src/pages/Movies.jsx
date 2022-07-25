import { useSearchParams } from "react-router-dom";
// import { getSearchedMovies } from '../services/api'

export const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const name = searchParams.get("name");
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        console.log(form.input.value);
        // setSearchParams(form.element.username.value);
        // getSearchedMovies()
        form.reset();
    };
    return (
        <main>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={e => setSearchParams({ name: e.target.value })}></input>
                <button type='submit'>Search</button>
            </form>
        </main>
    );
};