import loadMovies from './load-movies.js';
import './search-component.js';
import { readOptions } from './hash-query.js';
import { updateSearchTerm } from './search-component.js';
import makeSearchMovieUrl from './make-search-movie-url.js';



window.addEventListener('hashchange', () => {
    const query = window.location.hash.slice(1);
    const queryOptions = readOptions(query);
    console.log(queryOptions);
    updateSearchTerm(queryOptions.searchTerm);

    const url = makeSearchMovieUrl(queryOptions);
    fetch(url) 
        .then(response => response.json()) 
        .then(results => {
            loadMovies(results.results);
        });
});

