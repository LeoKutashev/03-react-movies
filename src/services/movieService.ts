import axios from "axios";
import type { Movie } from "../types/movie";

interface MovieHttpResponse {
  results: Movie[];
}

const URL = "https://api.themoviedb.org/3/search/movie";
const token = import.meta.env.VITE_TMDB_TOKEN;

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const response = await axios.get<MovieHttpResponse>(URL, {
    params: {
      query,
      include_adult: false,
      language: "en-US",
      page: 1,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.results;
};

export const imgURL = "https://image.tmdb.org/t/p/w500";
