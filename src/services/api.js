import { PropTypes } from 'prop-types';
import axios from 'axios';
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
};

const moviesSearchFetch = async query => {
  try {
    const response = await axios.get(
      `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};

const moviesDetailsFetch = async id => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const movieCastFetch = async id => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const movieReviewsFetch = async id => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

moviesSearchFetch.propTypes = {
  query: PropTypes.string.isRequired,
};

moviesDetailsFetch.propTypes = {
  id: PropTypes.number.isRequired,
};

movieCastFetch.propTypes = {
  id: PropTypes.number.isRequired,
};

movieReviewsFetch.propTypes = {
  id: PropTypes.number.isRequired,
};

export {
  moviesTrendingFetch,
  moviesSearchFetch,
  moviesDetailsFetch,
  movieCastFetch,
  movieReviewsFetch,
};
