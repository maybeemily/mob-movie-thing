import './html-equal.js';

const test = QUnit.test;

function makeMovieTemplate(movie) {
    const html = `
    <li>
    <h2>Star Wars</h2>
    <img src="https://image.tmdb.org/t/p/w92/btTdmkgIvOi0FFip1sPuZI2oQG6.jpg">
    <p>Release Date: 1977-05-25</p>
    </li>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

test('template will be the same as static html', assert => {
    //arrange
    const movie = {
        'id': 11,
        'title': 'Star Wars',
        'poster_path': '/btTdmkgIvOi0FFip1sPuZI2oQG6.jpg',
        'release_date': '1977-05-25'
    };

    //act
    const result = makeMovieTemplate(movie);

    //assert
    assert.htmlEqual(result, /*html*/ `
    <li>
    <h2>Star Wars</h2>
    <img src="https://image.tmdb.org/t/p/w92/btTdmkgIvOi0FFip1sPuZI2oQG6.jpg">
    <p>Release Date: 1977-05-25</p>
    </li>
`);

});