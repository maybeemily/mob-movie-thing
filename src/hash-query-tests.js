export function writeSearchToQuery(existingQuery, searchTerm) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('searchTerm', searchTerm);
    searchParams.set('page', 1);

    return searchParams.toString();
}

export function writePageToQuery(existingQuery, page) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('page', page);

    return searchParams.toString();
}

export function readOptions(query) {
    const searchParams = new URLSearchParams(query);
    const existingQuery = {
        searchTerm: searchParams.get('searchTerm'),
        page: parseInt(searchParams.get('page'))
    };
    return existingQuery;
}