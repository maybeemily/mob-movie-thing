
export default function makeMovieTemplate(movie) {
    const html = `
    <li>
    <h2>${movie.title}</h2>
    <img src="https://image.tmdb.org/t/p/w92${movie.poster_path}">
    <p>Release Date: ${movie.release_date}</p>
    </li>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}