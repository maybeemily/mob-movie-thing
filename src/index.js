import loadMovies from './load-movies.js';
import './search-component.js';
import { readOptions } from './hash-query.js';
import { updateSearchTerm } from './search-component.js';
import makeSearchMovieUrl from './make-search-movie-url.js';
import { updatePagingInfo } from './paging-component.js';


window.addEventListener('hashchange', () => {
    const query = window.location.hash.slice(1);
    const queryOptions = readOptions(query);
    updateSearchTerm(queryOptions.searchTerm);

    const url = makeSearchMovieUrl(queryOptions);
    fetch(url) 
        .then(response => response.json()) 
        .then(results => {
            loadMovies(results.results);

            const pagingInfo = {
                page: results.page,
                totalPages: results.total_pages
            };

            updatePagingInfo(pagingInfo);

        });
});

