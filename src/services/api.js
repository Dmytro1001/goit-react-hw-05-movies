import axios from "axios";
const API_KEY = '935077f1f1ce8c80ce35dd9a38d63eff';
const BASE_URL = 'https://api.themoviedb.org/3/';

const moviesTrendingFetch = async () => {
    try {
        const response = await axios.get(
            `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
        );
        return response.data.results;
    } catch (error) {
        console.error(error);
    }
    // const url = `${BASE_URL}trending/movie/day?api_key=${API_KEY}`;
    // return await axios.get(`${url}`).then(response => response.data);    
};

const moviesSearchFetch = async (query) => {
    try {
        const response = await axios.get(
            `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
        );
        return response.data.results;
    } catch (error) {
        console.error(error);
    };
};

export { moviesTrendingFetch, moviesSearchFetch };