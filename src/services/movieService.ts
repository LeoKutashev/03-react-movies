import axios from "axios";
import type { Movie } from "../types/movie";
interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
}
const URL = "https://api.themoviedb.org/3/search/movie";
const token = import.meta.env.VITE_TMDB_TOKEN;
export const fetchMovies = async (
  query: string,
  page: number
): Promise<MovieResponse> => {
  const response = await axios.get<MovieResponse>(URL, {
    params: {
      query,
      page,
      include_adult: false,
      language: "en-US",
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
export const imgURL = "https://image.tmdb.org/t/p/w500/";
