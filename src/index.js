import loadMovies from './load-movies.js';
import './search-component.js';
import { readOptions } from './hash-query.js';
import { updateSearchTerm } from './search-component.js';
import makeSearchMovieUrl from './make-search-movie-url.js';
import { updatePagingInfo } from './paging-component.js';

const promptDisplay = document.getElementById('prompt');
const moviesContainer = document.getElementById('movies-container');

window.addEventListener('hashchange', loadQuery);
loadQuery();

function loadQuery() {
    const query = window.location.hash.slice(1);
    const queryOptions = readOptions(query);
    updateSearchTerm(queryOptions.searchTerm);
        
    const url = makeSearchMovieUrl(queryOptions);
        
    if(!url) {
        promptDisplay.classList.remove('hidden');
        moviesContainer.classList.add('hidden');
        return;
    }

    else {
        promptDisplay.classList.add('hidden');
        moviesContainer.classList.remove('hidden');
    }
        
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
}



