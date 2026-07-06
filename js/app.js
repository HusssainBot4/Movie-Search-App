import { state } from "./state.js";
import { searchMovies } from "../api/tmdb.js";

const searchInput = document.querySelector("#searchInput");
const status = document.querySelector("#status");

searchInput.addEventListener("input", handleSearch);


async function handleSearch(event) {

    const query = event.target.value.trim();

    if (!query) {
        state.movies = [];
        state.searchQuery = "";
        return;
    }

    state.searchQuery = query;

    state.loading = true;

    try {
        const data = await searchMovies(query);
        state.movies = data.results;
        state.currentPage = data.page;
        state.totalPages = data.total_pages;
        console.log(state.movies);
    }
    catch (error) {
        state.error = error.message;
        console.error(error);
    }
    finally {
        state.loading = false;
    }
}



