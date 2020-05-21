const API_KEY = 'cbb9be37d19ea9e7b3e196000ada9524';
const getData = async (dataType) => {
    let endpoint, params;
    switch (dataType) {
        case 'genres':
            endpoint = 'https://api.themoviedb.org/3/genre/movie/list';
            break;
        case 'top-movie':
            endpoint = 'https://api.themoviedb.org/3/find/tt1375666';
            params = '&external_source=imdb_id';
            break;
        case 'top-rated-movies':
            endpoint = 'https://api.themoviedb.org/3/movie/top_rated';
            break;
        case 'top-rated-action-movies':
            endpoint = 'https://api.themoviedb.org/3/discover/movie';
            params = '&sort_by=vote_average.desc&with_genres=28&vote_count.gte=10000';
            break;
        case 'movies-from-1975':
            endpoint = 'https://api.themoviedb.org/3/discover/movie';
            params = '&primary_release_year=1975';
            break;
    }
    let apiUrl = `${endpoint}?api_key=${API_KEY}`;
    if (params) apiUrl += params;
    try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        switch (dataType) {
            case 'genres':
                return data.genres;
            case 'top-movie':
                return data.movie_results[0];
            case 'top-rated-movies':
                return data.results.splice(0, 10);
            default:
                return data.results;
        }
    } catch (error) {
        console.log(error);
    }
};