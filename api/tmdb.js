import { API_KEY, BASE_URL } from "../js/config.js";

export async function searchMovies(query, page = 1) {

    const url =
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${page}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Unable to fetch movies.");
    }

    return await response.json();
}

export async function getMovieDetails(movieId) {
    const url = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Movie not found.");
    }

    return await response.json();
}










