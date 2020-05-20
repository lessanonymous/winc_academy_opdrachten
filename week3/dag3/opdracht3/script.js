const getGenres = async () => {
    const genres = await getData();
    console.log(genres);
};

getGenres();