import loadMovies from './load-movies.js';
import movies from '../data/fake-ass-movies.js';
import './search-component.js';
import { readOptions } from './hash-query.js';
import { updateSearchTerm } from './search-component.js';

loadMovies(movies);

window.addEventListener('hashchange', () => {
    const query = window.location.hash.slice(1);
    const queryOptions = readOptions(query);
    console.log(queryOptions);
    updateSearchTerm(queryOptions.searchTerm);
});