const dialog = document.querySelector("#movieDialog");

const dialogContent = document.querySelector("#dialogContent");

export function renderModal(movie) {

    const poster = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "assets/placeholder.png";

    const genres =
        movie.genres
            .map(g => g.name)
            .join(" • ");

    const companies =
        movie.production_companies
            .map(c => c.name)
            .join(", ");

    dialogContent.innerHTML = `

<img
src="${poster}"
alt="${movie.title}">

<h2>${movie.title}</h2>

<p>⭐ ${movie.vote_average.toFixed(1)}</p>

<p>${movie.overview}</p>

<p><strong>Genres:</strong> ${genres}</p>

<p><strong>Runtime:</strong> ${movie.runtime} min</p>

<p><strong>Budget:</strong> $${movie.budget.toLocaleString()}</p>

<p><strong>Revenue:</strong> $${movie.revenue.toLocaleString()}</p>

<p><strong>Production:</strong> ${companies}</p>

`;

    dialog.showModal();

}