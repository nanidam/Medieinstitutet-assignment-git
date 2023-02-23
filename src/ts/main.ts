import { fetchMovies } from "./services/movieservice";

const nextPageBtn = document.querySelector(".next-page") as HTMLButtonElement;
const previousPageBtn = document.querySelector(
  ".previous-page"
) as HTMLButtonElement;
const firstPageBtn = document.querySelector(".first-page") as HTMLButtonElement;
const lastPageBtn = document.querySelector(".last-page") as HTMLButtonElement;

const movieSliderWrapper = document.querySelector(
  ".movie-slider-wrapper"
) as HTMLDivElement;

let whichPage: number = 1;

const createMoviesSlider = async () => {
  const horrorMovies = await fetchMovies(whichPage, 27);

  for (let i = 0; i < horrorMovies.length; i++) {
    const createHtmlGenre = document.createElement("article") as HTMLElement;
    createHtmlGenre.classList.add("movie-card");
    createHtmlGenre.innerHTML = `
      <img class="movie-slider-poster" src="https://image.tmdb.org/t/p/w500${
        horrorMovies[i].poster_path
      }" alt="${horrorMovies[i].title} movie poster" width="100">
      <h3 class="movie-slider-title">${horrorMovies[i].title}</h3>
      <p class="movie-slider-year">${horrorMovies[i].release_date.slice(
        0,
        4
      )}</p>
      `;
    movieSliderWrapper.appendChild(createHtmlGenre);
  }
};

const createMovies = async () => {
  const movies = await fetchMovies(whichPage);
  const moviesContainer = document.querySelector(
    ".movies-container"
  ) as HTMLElement;
  moviesContainer.innerHTML = "";

  for (let i = 0; i < movies.length; i++) {
    const movieContainer = document.createElement("div");
    movieContainer.className = "movie-container";
    movieContainer.innerHTML = `
          <img class="movie-poster" src="https://image.tmdb.org/t/p/w500${
            movies[i].poster_path
          }" alt="movie poster" />
          <h2 class="movie-title">${movies[i].title}</h2>
          <div class="movie-overview">
            <p>${movies[i].release_date.slice(0, 4)}</p>
            <p>${movies[i].vote_average}/10</p>
          </div>
          `;
    moviesContainer?.appendChild(movieContainer);
  }
};

nextPageBtn.addEventListener("click", () => {
  if (whichPage < 500) {
    whichPage += 1;
    createMovies();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
});

previousPageBtn.addEventListener("click", () => {
  if (whichPage > 1) {
    whichPage -= 1;
    createMovies();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
});

firstPageBtn.addEventListener("click", () => {
  whichPage = 1;
  createMovies();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

lastPageBtn.addEventListener("click", () => {
  whichPage = 500;
  createMovies();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

createMoviesSlider();
createMovies();
