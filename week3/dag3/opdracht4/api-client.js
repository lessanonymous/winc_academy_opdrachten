const API_KEY = 'cbb9be37d19ea9e7b3e196000ada9524';

const getData = async (endpoint, params) => {
    let apiUrl = `${endpoint}?api_key=${API_KEY}`;
    if (params) apiUrl += params;
    try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};