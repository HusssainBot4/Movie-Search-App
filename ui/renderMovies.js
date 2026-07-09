const moviesGrid =
    document.querySelector("#moviesGrid");

export function renderMovies(movies) {

    moviesGrid.innerHTML = "";

    const html = movies.map(movie => {

        const poster = movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : "assets/placeholder.png";

        const year = movie.release_date
            ? movie.release_date.slice(0,4)
            : "N/A";

        const overview =
            movie.overview.length > 150
            ? movie.overview.slice(0,150) + "..."
            : movie.overview;

        return `

<div class="movie-card"

data-id="${movie.id}">

<img

src="${poster}"

alt="${movie.title}"

loading="lazy">

<h3>

${movie.title}

</h3>

<p>

${year}

</p>

<p>

⭐ ${movie.vote_average.toFixed(1)}

</p>

<p>

${overview}

</p>

<button

class="favorite-btn">

🤍

</button>

</div>

`;

    }).join("");

    moviesGrid.innerHTML = html;

}