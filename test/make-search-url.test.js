import makeSearchMovieUrl from '../src/make-search-movie-url.js';
const test = QUnit.test;

QUnit.module('url test');

test('function returns URL if no search term', assert => {
    //arrange
    const queryOptions = {
        searchTerm: '',
        page: 1
    };

    const expected = '';
    //act
    const result = makeSearchMovieUrl(queryOptions);
    //assert
    assert.equal(result, expected);
});

test('url includes query and page', assert => {
    //arrange
    const queryOptions = {
        searchTerm: 'star wars',
        page: 3
    };
    //act
    const expected = 'https://api.themoviedb.org/3/search/movie?api_key=a9c1c53b2d714000fd04fb94fe4ad651&language=en-us&include_adult=false&query=star+wars&page=3';
    
    const url = makeSearchMovieUrl(queryOptions);
    
    //assert

    assert.equal(url, expected);
});