import axios from "axios";
import { ITmdbResponse } from "../models/ITmdbResponse";
import { IMovie } from "../models/IMovie";

export const fetchMovies = async (
  page: number,
  genre?: number
): Promise<IMovie[]> => {
  const API_CONFIG = {
    params: {
      api_key: "edfb4a11c2c5f2ff5f3e1ef08db80649",
      page,
      with_genres: genre,
    },
  };

  const response: ITmdbResponse = await axios.get(
    "https://api.themoviedb.org/3/discover/movie",
    API_CONFIG
  );

  // const response2: ITmdbResponse = await axios.get(
  //   "https://api.themoviedb.org/3/movie/",
  //   API_CONFIG
  // );

  console.log(response.data.results[0].genre_ids);
  return response.data.results;
};
