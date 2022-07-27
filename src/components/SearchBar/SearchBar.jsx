import PropTypes from 'prop-types';
import s from './SearchBar.module.css';
export const SearchBar = ({ onChange, onSubmit, query }) => {
    return (
        <form onSubmit={onSubmit}>
            <input
                onChange={e => onChange(e.target.value)}
                type="text"
                name='query'
                value={query}
                className={s.input}
            ></input>
            <button className={s.btn} type='submit'>Search</button>
        </form>)
}

SearchBar.propTypes = {
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    query: PropTypes.string,
}

