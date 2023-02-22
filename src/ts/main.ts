import { fetchMovies } from "./services/movieservice";

const movies = await fetchMovies(2);
console.log(movies[0].title);
