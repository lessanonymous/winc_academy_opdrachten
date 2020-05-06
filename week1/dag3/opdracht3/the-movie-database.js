const movie = {
    title: 'Inception',
    duration: 145,
    stars: ['Leonardo DiCaprio', 'actor2', 'actor3']
};

const logMovie = movie => console.log(`${movie.title} lasts for ${movie.duration} minutes. Stars: ${movie.stars.join(', ')}`);

logMovie(movie);