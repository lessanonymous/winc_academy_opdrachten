const API_KEY = 'cbb9be37d19ea9e7b3e196000ada9524';

const getData = async () => {
    const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
    try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }

};