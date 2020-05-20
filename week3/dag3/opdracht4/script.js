// get html elements
const genresList = document.querySelector('.genres-list');
const topRatedMoviesList = document.querySelector('.top-rated-movies-list');
const topRatedActionMoviesList = document.querySelector('.top-rated-action-movies-list');
const from1975MoviesList = document.querySelector('.movies-from-1975-list');
// movie data helpers
const getMovieGenres = async () => {
    const endpoint = 'https://api.themoviedb.org/3/genre/movie/list';
    const genres = await getData(endpoint);
    return genres.genres;
};
const getTopMovie = async () => {
    const endpoint = 'https://api.themoviedb.org/3/find/tt1375666';
    const params = '&external_source=imdb_id';
    const topMovie = await getData(endpoint, params);
    return topMovie.movie_results[0];
};
const getTopRatedMovies = async () => {
    const endpoint = 'https://api.themoviedb.org/3/movie/top_rated';
    const topRatedMovies = await getData(endpoint);
    return topRatedMovies.results.splice(0, 10);
};
const getTopRatedActionMovies = async () => {
    const endpoint = 'https://api.themoviedb.org/3/discover/movie';
    const params = '&sort_by=vote_average.desc&with_genres=28&vote_count.gte=10000';
    const topRatedActionMovies = await getData(endpoint, params);
    return topRatedActionMovies.results;
};
const getMoviesFrom1975 = async () => {
    const endpoint = 'https://api.themoviedb.org/3/discover/movie';
    const params = '&primary_release_year=1975';
    const moviesFrom1975 = await getData(endpoint, params);
    return moviesFrom1975.results;
};
// helpers for creating new elements
const createMovieGenreElement = genre => {
    const li = document.createElement('li');
    li.className = 'genre';
    li.innerHTML = `Genre naam: ${genre.name}, id: ${genre.id}`;
    return li;
};
const createTopMovieElement = topMovie => {
    const p = document.createElement('p');
    p.className = 'top-movie';
    p.innerHTML = topMovie.title;
    return p;
};
const createTopRatedMovieElement = topRatedMovie => {
    const li = document.createElement('li');
    li.className = 'top-rated-movie';
    li.innerHTML = topRatedMovie.title;
    return li;
};
const createTopRatedActionMovieElement = topRatedActionMovie => {
    const li = document.createElement('li');
    li.className = 'top-rated-action-movie';
    li.innerHTML = topRatedActionMovie.title;
    return li;
};
const create1975MovieElement = moviefrom1975 => {
    const li = document.createElement('li');
    li.className = 'movie-from-1975';
    li.innerHTML = moviefrom1975.title;
    return li;
};
// helpers for adding elements to DOM
const addMovieGenreElementsToDom = () => {
    const movieGenres = getMovieGenres();
    movieGenres.then(genres => {
        genres.forEach(genre => {
            const genreElement = createMovieGenreElement(genre);
            genresList.appendChild(genreElement);
        });
    });
};
const addTopMovieElementToDom = () => {
    const topMovie = getTopMovie();
    topMovie.then(movie => {
        const topMovieElement = createTopMovieElement(movie);
        const topRatedElement = document.querySelector('.top-rated');
        document.body.insertBefore(topMovieElement, topRatedElement);
    });
};
const addTopRatedMovieElementsToDom = () => {
    const topRatedMovies = getTopRatedMovies();
    topRatedMovies.then(movies => {
        movies.forEach(movie => {
            const topRatedMovieElement = createTopRatedMovieElement(movie);
            topRatedMoviesList.appendChild(topRatedMovieElement);
        });
    });
};

const addTopRatedActionMovieElementsToDom = () => {
    const topRatedActionMovies = getTopRatedActionMovies();
    topRatedActionMovies.then(movies => {
        movies.forEach(movie => {
            const topRatedActionMovieElement = createTopRatedActionMovieElement(movie);
            topRatedActionMoviesList.appendChild(topRatedActionMovieElement);
        });
    });
};
const addFrom1975MovieElementsToDom = () => {
    const moviesFrom1975 = getMoviesFrom1975();
    moviesFrom1975.then(movies => {
        movies.forEach(movie => {
            const from1975MovieElement = create1975MovieElement(movie);
            from1975MoviesList.appendChild(from1975MovieElement);
        });
    });
};

addMovieGenreElementsToDom();
addTopMovieElementToDom();
addTopRatedMovieElementsToDom();
addTopRatedActionMovieElementsToDom();
addFrom1975MovieElementsToDom();