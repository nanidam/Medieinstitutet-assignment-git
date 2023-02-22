import { IMovie } from "./IMovie";

export interface ITmdbResponse {
  data: {
    page: number;
    results: IMovie[];
    total_pages: number;
    total_results: number;
  };
}
