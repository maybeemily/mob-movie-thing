# mob-movie-thing

Search Page API
Build a searchable, pageable explorer for an API of your choice.

API
Pick an API that:

Has CORS enabled
Accepts a search/query term
Supports paging
You will likely need to sign up for an API key.

Not sure? Two good sources for movies: https://www.themoviedb.org or https://www.omdbapi.com

Pages
This will be a single page app. It offers a simple form with one text input and a button for the user to enter their search term. It should also have a paging control for advancing through the pages

Using the API
TDD a function that takes the search and page inputs and returns the correct URL for your API. Consider using the built-in URL class to create and format the url. If search term is required and is missing, return an empty string so you can detect not to run the search.

Store search and page in the URL
Using the URLSearchParams built in class, format a query string, but store it in window.location.hash (this will keep our page from refreshing!). You can use the function directly from the search and paging components (no callback needed!)

Load from hash
In index.js subscribe to the window hashChange event and call a function that runs the API based on the hash values. You should call this function on page load as well.