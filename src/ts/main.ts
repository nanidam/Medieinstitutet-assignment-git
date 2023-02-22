import { IMovie } from "./models/IMovie";
import { fetchMovies } from "./services/movieservice";

// const movies: IMovie[] = await fetchMovies(1);
// console.log(movies[0].poster_path);

const createMovies = async () => {
  const movies = await fetchMovies(1);
  //   console.log(movies[0].poster_path);

  const moviesContainer = document.querySelector(".movies-container");

  for (let i = 0; i < movies.length; i++) {
    const movieContainer = document.createElement("div");
    movieContainer.className = "movie-container";
    movieContainer.innerHTML = `
          <img class="movie-poster" src="https://image.tmdb.org/t/p/w500${movies[i].poster_path}" alt="movie poster" />
          <h2 class="movie-title">${movies[i].title}</h2>
          <div class="movie-overview">
            <p>${movies[i].release_date}</p>
            <p>${movies[i].vote_average}/10</p>
          </div>
          `;
    moviesContainer?.appendChild(movieContainer);
  }
};

createMovies();
