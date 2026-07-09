import { state } from "./state.js";
import { searchMovies } from "../api/tmdb.js";
import { renderMovies } from "../ui/renderMovies.js";
import { debounce } from "../utils/debounce.js";

const searchInput = document.querySelector("#searchInput");
const status = document.querySelector("#status");

const debouncedSearch = debounce(handleSearch, 300);
searchInput.addEventListener(
    "input",
    debouncedSearch
);



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
        renderMovies(state.movies);
    }
    catch (error) {
        state.error = error.message;
        console.error(error);
    }
    finally {
        state.loading = false;
    }
}



